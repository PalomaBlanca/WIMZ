import api from './index.js';

export default async function(stationStartID, stationEndID, departure, getParamsString) {
  // for db  api
  //const authCodeDB = 'Bearer 3cb2aea43fe04d6e5e84330e36cf4ed0';
  // Send request
  var getString = "";
  if(departure) {
    getString = `&departure=${departure}`;
  }

  const apiTest = await api('DBStations', `https://v5.db.transport.rest/journeys?from=${stationStartID}&to=${stationEndID}`, getString);
  const response = await apiTest.get('');
  // Return response
  return response.data;
};

// example:

// import api from '@/js/api/testApi';
// const apiResponse = await api(value);
