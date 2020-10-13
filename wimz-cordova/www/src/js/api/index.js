import axios from 'axios';
import { isProductionEnvironment } from '../../js/env.js';

export default async function(route, externalUrl, getParams) {
  // Create a new axios instance with some default settings

  var url = `/api/${route}/index.php`;

  if(externalUrl) {
    url = `${externalUrl}`;
  }

  if(getParams) {
    url = `${url}${getParams}`;
  }

  const api = axios.create({
    baseURL: url,
    // timeout: 1000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    transformRequest(data) {
      return JSON.stringify({
        data: JSON.stringify(data),
      });
    },
  });

  // Mock all APIs here(
  if (!isProductionEnvironment) {
    const MockAdapter = (
      await import(/* webpackChunkName: "mocks" */ 'axios-mock-adapter')
    ).default;
    const mocks = (await import(/* webpackChunkName: "mocks" */ './mocks'))
      .default;

    // Create mock-instance for the new axios instance
    const mockAdapter = new MockAdapter(api);

    // register mock on the MockAdapter if it exists
    if (mocks[route]) {
      mocks[route](mockAdapter);
    }
    // Finally let all remaining, unmocked requests pass to the real api over network
    mockAdapter.onAny().passThrough();
  }

  return api;
}
