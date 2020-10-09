import api from './index.js';

export default async function(id, date) {
  // weitere mögliche API ist: https://reiseauskunft.bahn.de/bin/ajax-getstop.exe/dn?REQ0JourneyStopsS0A=7&REQ0JourneyStopsB=12&REQ0JourneyStopsS0G= ${nutzereingabe}
  //Production:
  const authCodeDB = 'Bearer c68677c4eecf7984eae7f11a61781445';
  //Sandbox
  //const authCodeDB = 'Bearer 3cb2aea43fe04d6e5e84330e36cf4ed0';

  // Send request
  const apiTest = await api('DBStationArrivalBoard', 'https://api.deutschebahn.com/fahrplan-plus/v1/arrivalBoard', date, authCodeDB);
  const response = await apiTest.get(`${id}?date=${date || ""}`);

  // Return response
  return response.data;
};

// example:

// import api from '@/js/api/testApi';
// const apiResponse = await api(value);
