import AlchemyAPI from 'alchemy-api';
import Bluebird from 'bluebird';

export default class AlchemyEmotionAnalyser {

  constructor(apiKey) {
    this.alchemy = new AlchemyAPI(apiKey);
  }

  analyseEmotion(text) {
    return new Bluebird((resolve, reject) => {
      this.alchemy.emotions(text, {}, function(err, response) {
        if (err) {
          reject(err);
        }

        resolve(response);
      });
    });
  }

}
