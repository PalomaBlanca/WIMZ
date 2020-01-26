import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentLocation: {
            lat: '',
            lng: '',
        },
        markerOfTrain: {
            lat: '',
            lng: '',
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