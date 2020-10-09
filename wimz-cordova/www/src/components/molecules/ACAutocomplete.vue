<template>
  <div class="autocomplete">
    <input
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Lade Ergebnisse :)...
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
      >
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ACAutocomplete',

    props: {
      listData: {
        type: Array,
        required: false,
        default: () => [],
      },
      isAsync: {
        type: Boolean,
        required: false,
        default: false,
      },
    },

    data() {
      return {
        isOpen: false,
        results: [],
        search: '',
        isLoading: false,
        arrowCounter: 0,
      };
    },

    methods: {
      onChange() {
        // Let's warn the parent that a change was made
        this.$emit('newInput', this.search);

        // Is the data given by an outside ajax request?
        if (this.isAsync) {
          this.isLoading = true;
          this.isOpen = true;
        } else {
          // Let's our flat array
          this.filterResults();
          this.isOpen = true;
        }
      },

      filterResults() {
        // first uncapitalize all the things
        this.results = this.listData.filter((item) => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        });
      },
      setResult(result) {
        this.search = result.name;
        this.$emit('setChoice', result);
        this.isOpen = false;
      },
      onArrowDown(evt) {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter -1;
        }
      },
      onEnter() {
        this.search = this.results[this.arrowCounter];
        this.isOpen = false;
        this.arrowCounter = -1;
      },
      handleClickOutside(evt) {
        if (!this.$el.contains(evt.target)) {
          this.isOpen = false;
          this.arrowCounter = -1;
        }
      }
    },
    watch: {
      listData: function (val, oldValue) {
        console.log(val, oldValue);
        // actually compare them
        if (JSON.stringify(val) !== JSON.stringify(oldValue)) {
          console.log("not equal");
          this.results = val;
          this.isLoading = false;
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    }
  };
</script>

<style>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
    width: 100%;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }

</style>




<!-- <template>
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
  import Fuse from 'fuse.js';
  export default {

    name: 'ACAutocomplete',

    data() {
      return {
        userInput: '',
        isOpen: false,
        isLoading: true,
        fuseSearch: '',
        items: '',
      };
    },

    props: {
      listData: {
        type: Array,
        default: [],
      },
      isAsync: {
        type: Boolean,
        default: true,
      }
    },

    methods: {
      onChange() {
        console.log(this.isAsync);
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
          this.items = this.fuseSearch.search(this.userInput);
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
      this.fuseSearch = new Fuse(this.listData, {
        keys: ['name']
      });

      document.addEventListener('click', this.handleClickOutside)
    },

    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    },

    watch: {
      listData(newValue) {
        if (newValue) {
          this.isLoading = false;
        }
      }
    },
  };
</script> -->
