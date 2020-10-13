<template>
  <div class="autocomplete">
    <input
      class="input-autocomplete"
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
      :placeholder="placeholder"
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
      placeholder: {
        type: String,
        default: "",
      }
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
          this.results = val;
          this.isLoading = false;
      },

      search: function() {
        if(this.search.length < 3) {
          this.isOpen = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    destroyed() {
      document.removeEventListener('click', this.handleClickOutside)
    }
  };
</script>

<style lang="scss" scoped>
@import '@/sass/utils.scss';

  .autocomplete {
    position: relative;
    width: 100%;
  }

  .input-autocomplete {
    @include typo-regular-filled;
    font-size: 14px;
    padding-left: 35px;
    padding-right: 15px;
    color: $main-white;
    height: 40px;
    width: 100%;
    border: none;
    background-color: $main-blue;
    box-shadow: inset 5px 6px 8px -2px rgba(0, 0, 0, 0.6),
                inset -4px -5px 5px 0 rgba(255, 255, 255, 0.2);
    border-radius: 100px;

    &::placeholder {
      opacity: 0.6;
    }

    &:focus {
      outline: none;
    }
  }

  .autocomplete-results {
    position:absolute;
    background-color: $main-blue;
    z-index: 2;
    font-size: 14px;
    padding: 0;
    margin: 0;
    border-radius: 20px;
    height: 114px;
    overflow: auto;
    width: 100%;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding-left: 15px;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: $main-orange;
    color: white;
  }

</style>
