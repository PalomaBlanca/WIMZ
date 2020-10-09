import wait from '../../wait'
import successResponse from './DBStationsSuccessResponse.json'

export default (mockAdapter) => {
  mockAdapter.onPost('').reply(async config => {
    // eslint-disable-next-line no-console
    console.log('"DBStations" api mock received payload', config.data);

    const results = successResponse;

    await wait(1000);
    return [
      200,
      results,
    ];
  });
}
