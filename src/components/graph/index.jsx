import React from 'react';

import HighCharts from 'react-highcharts';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import style from './style';

const colors = {
  anger: '#E80521',
  disgust: '#592684',
  fear: '#325E2B',
  joy: '#FFD629',
  sadness: '#086DB2'
};

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      emotions: PlayModule.getters.emotionForSelectedSpeech,
      currentSpeech: PlayModule.getters.currentSpeech
    };
  },

  render() {
    const isEmpty = this.state.emotions.isEmpty();

    if (isEmpty) {
      return false;
    }

    const config = {
      xAxis: {
        categories: []
      },
      yAxis: {
        min: 0,
        max: 1
      },
      series: [{
        data: []
      }],
      chart: {
        type: 'column'
      },
    };

    const detectedEmotions = [];

    this.state.emotions.forEach((val, key) => {
      const numVal = Number(val);
      const detected = numVal > 0.5;
      if (detected) {
        detectedEmotions.push(key);
      }
      config.xAxis.categories.push(key);
      config.series[0].data.push({
        name: key,
        color: detected ? colors[key] : null,
        y: numVal,
        dataLabels: {
          enabled: true,
          align: 'center',
          verticalAlign: 'top',
          y: -25

        }
      });
    });

    config.title = {
      text: detectedEmotions.length > 0
        ? `Detected emotions: ${detectedEmotions.join(', ')}`
        : 'No emotion detected'
    };

    return (
      <div style={style.container}>
        <HighCharts config={config} />
      </div>
    )
  }

});
