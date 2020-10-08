import { configure } from '@storybook/vue'
import Vue from 'vue'

// import your vue plugins
import Vuex from 'vuex'

// import your custom components
import Map from '../src/components/Map.vue'

// install your vue plugins
Vue.use(Vuex);
// register your custom components
Vue.component('Map', Map);
function loadStories() {
    // you can require as many stories as you need
    require('../src/stories');
}
configure(loadStories, module);