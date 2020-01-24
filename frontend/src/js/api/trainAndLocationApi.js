import api from './index.js';

export default async value => {
  const requestPayload = {
    value,
  };
  // Send request
  const apiTest = await api('trainAndLocation');
  const response = await apiTest.post('', requestPayload);

  // Return response
  return response.data;
};

// example: 

// import api from '@/js/api/testApi';
// const apiResponse = await api(value);