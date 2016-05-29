import React from 'react';

import style from './styles';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import Speech from './speech';

import Radium from 'radium';

import Progress from './progress';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      speeches: PlayModule.getters.speechesForCurrentScene,
      currentSpeech: PlayModule.getters.currentSpeech
    };
  },

  _previousSpeech() {
    const currentSpeech = Number(this.state.currentSpeech);

    if (currentSpeech > 1) {
      PlayModule.actions.setCurrentSpeech(`${currentSpeech - 1}`);
    }

  },

  _nextSpeech() {
    const currentSpeech = Number(this.state.currentSpeech);
    const lastSpeechId = Reactor.evaluate(PlayModule.getters.lastSpeechIdForCurrentScene);

    if (currentSpeech < lastSpeechId) {
      PlayModule.actions.setCurrentSpeech(`${currentSpeech + 1}`);
    }
  },

  render() {
    const currentSpeech = Number(this.state.currentSpeech);
    const computedStyle = currentSpeech ? { transform: `translateX(${(currentSpeech - 1) * -500}px)`} : {}
    const lastSpeechId = Reactor.evaluate(PlayModule.getters.lastSpeechIdForCurrentScene);
    const isBeginning = currentSpeech === 1;
    const isEnd = currentSpeech === Number(lastSpeechId);

    return (
      <div style={ style.container }>
        <div style={ [style.navigator.previous, (!currentSpeech || isBeginning) && style.hide ] }
             onClick={this._previousSpeech} >
          <span style={ style.navigator.previousText}>&lt;</span>
        </div>
        <div style={ [style.innerContainer, computedStyle] }>

          {
            this.state.speeches.map(speech =>
              <Speech speech={speech} key={speech.get('id')} />
            ).toList()
          }

        </div>
        <div style={ [style.navigator.next, (!currentSpeech || isEnd) && style.hide ]}
             onClick={this._nextSpeech}>
          <span style={ style.navigator.nextText}>&gt;</span>
        </div>
        <Progress />
      </div>
    );
  }

}));
