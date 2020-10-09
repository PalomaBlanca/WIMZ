import api from './index.js';

export default async function(stationString, getParamsString) {
  const authCodeDB = 'Bearer 3cb2aea43fe04d6e5e84330e36cf4ed0';
  // Send request
  const apiTest = await api('DBStations', 'https://api.deutschebahn.com/fahrplan-plus/v1/location', getParamsString, authCodeDB);
  const response = await apiTest.get(`${stationString}?${getParamsString || ""}`);

  // Return response
  return response.data;
};

// example:

// import api from '@/js/api/testApi';
// const apiResponse = await api(value);
