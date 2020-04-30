import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoadingGetInfo: false,
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
        },
        setIsLoadingGetInfo(state, payload){
            state.isLoadingGetInfo = payload;
        }
    },
    getters: {
        currentLocation: state => state.currentLocation,
        markersOfTrain: state => state.markersOfTrain,
        isLoadingGetInfo: state => state.isLoadingGetInfo,
    }
});