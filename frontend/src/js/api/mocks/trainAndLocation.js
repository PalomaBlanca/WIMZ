import wait from '../../wait'
import fewResults from './sucheResponseFewResults.json'

export default (mockAdapter) => {
  mockAdapter.onPost('').reply(async config => {
    // eslint-disable-next-line no-console
    console.log('"trainAndLocation" api mock received payload', config.data);

    const results = fewResults;

    await wait(1000);
    return [
      200,
      results,
    ];
  });
}
