import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentLocation: {
            lat: 0,
            lng: 0,
        },
        markerOfTrain: {
            lat: 0,
            lng: 0,
            label: '',
            lastUpdate: ''
        }
    },
    mutations: {
        setCurrentLocation(state, currentLocation) {
            state.currentLocation = currentLocation;
        },
        setMarkerOfTrain(state, payload) {
            state.markerOfTrain = payload;
        }
    },
    getters: {
        currentLocation: state => state.currentLocation,
        markerOfTrain: state => state.markerOfTrain
    }
});