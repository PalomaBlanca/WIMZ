import api from './index.js';

export default async query => {
    const requestPayload = {
        query,
    };
    // Send request
    const apiTest = await api('searchingForTrain');
    const response = await apiTest.post('', requestPayload);

    // Return response
    return response.data;
};