<template>
  <div class="autocomplete">
    <input
      type="text"
      v-model="userInput"
      @input="onChange"
    />
    <ul
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Lade...
        düdülü :)
      </li>
      <li
        v-else
        v-for="(item) in items"
        :key="item.id"
        @click="setResult(item)"
        class="autocomplete-result"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

    name: 'ACAutocomplete',

    data() {
      return {
        userInput: '',
        isOpen: false,
        isLoading: true,
      };
    },

    methods: {
      onChange() {
        if(this.userInput.length > 2) {
          this.$emit('newInput', this.userInput);
          this.isOpen = true;
          if(this.items.length > 0) this.isLoading = false;
        } else {
          this.isOpen = false;
        }
        // Is the data given by an outside ajax request?
        if (this.isAsync) {
          this.isLoading = true;
        } else {
          this.isOpen = true;
        }

      },
      setResult(item) {
        this.userInput = item.name;
        this.$emit('setChoice', item)
        this.isOpen = false;
      },
    },

    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
      }
    },

    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },

    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    },

    props: {
      items: {
        type: Array,
        default: [],
      },
      isAsync: {
        type: Boolean,
        default: true,
      }
    },

    watch: {
      items(newValue) {
        if (newValue) {
          this.isLoading = false;
        }
      }
    },
  };
</script>

<style>
  .autocomplete {
    position: relative;
    width: 130px;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>
