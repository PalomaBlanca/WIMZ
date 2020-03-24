import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentLocation: {
            lat: 0,
            lng: 0,
        },
        markersOfTrain: [],
        /* 
        {
            lat: 0,
            lng: 0,
            label: '',
            lastUpdate: '',
            comment: '',
            from: '',
            to: ''
        }
        */
    },
    mutations: {
        setCurrentLocation(state, currentLocation) {
            state.currentLocation = currentLocation;
        },
        setMarkerOfTrain(state, payload) {
            state.markersOfTrain = payload;
        }
    },
    getters: {
        currentLocation: state => state.currentLocation,
        markersOfTrain: state => state.markersOfTrain
    }
});