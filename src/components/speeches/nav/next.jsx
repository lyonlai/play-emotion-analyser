import React from 'react';

import Reactor from 'reactor';
import PlayModule from 'modules/play';

import style from './styles/next';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentSpeech: PlayModule.getters.currentSpeech
    };
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
    const lastSpeechId = Reactor.evaluate(PlayModule.getters.lastSpeechIdForCurrentScene);
    const isEnd = currentSpeech === Number(lastSpeechId);

    return (
      <div style={ [style.navigator.next, (!this.state.currentSpeech || isEnd) && style.hide ]}
           onClick={this._nextSpeech}>
        <span style={ style.navigator.nextText}>&gt;</span>
      </div>
    );
  }

}));
