import wait from '../../wait'
import moreResults from './sucheResponseMoreResults.json'
import fewResults from './sucheResponseFewResults.json'
import noResults from './sucheResponseNoResults.json'

export default (mockAdapter) => {
  mockAdapter.onPost('').reply(async config => {
    // eslint-disable-next-line no-console
    console.log('"suche" api mock received payload', config.data);

    const keywords = JSON.parse(config.data).data.allgemein;

    let results = moreResults;
    if (keywords.includes('keine')) {
      results = noResults
    } else if (keywords.includes('wenige')) {
      results = fewResults
    }

    await wait(1000);
    return [
      200,
      results,
    ];
  });
}
