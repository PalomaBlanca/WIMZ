import wait from '../../wait'
import trains from './trains.json'

export default (mockAdapter) => {
    mockAdapter.onPost('').reply(async config => {
        // eslint-disable-next-line no-console
        console.log('"searchingForTrain" api mock received payload ', config.data);
        let results = trains;

        await wait(2000);
        return [
            200,
            results,
        ];
    });
}
