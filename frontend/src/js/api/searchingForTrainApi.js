import api from './index.js';

export default async query => {
    const requestPayload = {
        query,
    };

    // Send request
    const apiTest = await api('searchingForTrain');
    const response = await apiTest.post('', requestPayload);

    if(response.status !== 200){
        response.data = [];
    }
    // Return response
    return response.data;
};