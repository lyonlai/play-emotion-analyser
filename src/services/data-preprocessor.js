import { toImmutable as I } from 'nuclear-js';
import { NumberConverter } from 'number-converter';

class DataPreprocessor {

  constructor() {
    this.numberConverter = new NumberConverter(NumberConverter.ROMAN_NUMERAL, NumberConverter.DECIMAL);
  }

  preprocessData(data) {
    let lastActNumber;
    let lastSceneNumber;
    let lastSpeechNumber;

    return data.reduce((result, line) => {
      const analysedResult = this.analyseLine(line);

      if (analysedResult.isAct) {
        lastActNumber = analysedResult.actNumber;
        return result.set(lastActNumber, I({
          scenes: {},
          id: lastActNumber,
          title: line.text_entry
        }));
      }

      if (analysedResult.isScene) {
        lastSceneNumber = analysedResult.sceneNumber;

        lastSpeechNumber = 1;

        return result.setIn([lastActNumber, 'scenes', lastSceneNumber], I({
          title: analysedResult.sceneTitle,
          id: lastSceneNumber,
          speakerIndexes: I({}),
          speeches: I({})
        }));
      }


      const text = line.text_entry;

      if (!analysedResult.isLine) {
        const speechBegun = result.hasIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber]);
        if (!speechBegun) {
          return result
            .setIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber], I({
              id: lastSpeechNumber,
              analysableText: '',
              displayableContent: [
                { speaker: null, isLine: false, text }
              ]
            }));
        } else {
          return result
            .updateIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber, 'displayableContent'], content =>
              content.push(I({ speaker: null, isLine: false, text }))
            );
        }
      } else {
        lastSpeechNumber = line.speech_number;
        const speechBegun = result.hasIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber]);
        if (!speechBegun) {
          return result
            .updateIn([lastActNumber, 'scenes', lastSceneNumber, 'speakerIndexes'], speakerIndexes =>
              speakerIndexes.has(line.speaker)
                ? speakerIndexes.update(line.speaker, indexes => indexes.push(lastSpeechNumber))
                : speakerIndexes.set(line.speaker, I([lastSpeechNumber]))
            )
            .setIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber], I({
              id: lastSpeechNumber,
              analysableText: text,
              speaker: line.speaker,
              displayableContent: [
                { speaker: line.speaker, isLine: true, text }
              ]
            }));
        } else {
          return result
            .updateIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber, 'analysableText'],
              content => `${content}${text}`)
            .updateIn([lastActNumber, 'scenes', lastSceneNumber, 'speeches', lastSpeechNumber, 'displayableContent'],
              content => {
                const lastContent = content.last();
                return lastContent.get('isLine')
                  ? content.updateIn([content.size - 1, 'text'], t => `${t}${text}`)
                  : content.push(I({ speaker: line.speaker, isLine: true, text }));
              });
        }
      }



    }, I({}));
  }

  analyseLine(line) {
    const romaNumeralDigits = 'IVXLCDM';
    const actRegex = new RegExp(`^ACT ([${romaNumeralDigits}]+)$`);
    const sceneRegex = new RegExp(`^SCENE ([${romaNumeralDigits}]+)\. (.+)`);
    const text = line.text_entry;
    const actResult = text.match(actRegex);
    const sceneResult = text.match(sceneRegex);
    const isAct = !!actResult;
    const actNumber = isAct && this.numberConverter.convert(actResult[1]);
    const isScene = !!sceneResult;
    const sceneNumber = isScene && this.numberConverter.convert(sceneResult[1]);
    const sceneTitle = isScene && sceneResult[2];
    const isLine = !!line.line_number;

    return {
      isAct, actNumber, isScene, sceneNumber, sceneTitle, isLine
    };

  }

}

export default new DataPreprocessor();
