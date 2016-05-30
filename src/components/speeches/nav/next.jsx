import React from 'react';

import Reactor from 'reactor';
import PlayModule from 'modules/play';

import style from './styles/next';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentSpeech: PlayModule.getters.currentSpeech,
      lastSpeech: PlayModule.getters.lastSpeechIdForCurrentScene,
      tracedPlayer: PlayModule.getters.tracedSpeaker,
      lastSpeechForSpeaker: PlayModule.getters.lastSpeakerSpeech
    };
  },

  _nextSpeech() {
    const currentSpeech = Number(this.state.currentSpeech);
    const tracedPlayer = this.state.tracedPlayer;

    if (tracedPlayer) {
      const lastSpeechForSpeaker = Number(this.state.lastSpeechForSpeaker);

      if (currentSpeech < lastSpeechForSpeaker) {
        const speechIndexes = Reactor.evaluate(PlayModule.getters.tracedSpeakerIndexes);
        const index = speechIndexes.indexOf(this.state.currentSpeech);
        PlayModule.actions.setCurrentSpeech(`${speechIndexes.get(index + 1)}`);
      }

    } else {
      const lastSpeechId = Number(this.state.lastSpeech);

      if (currentSpeech < lastSpeechId) {
        PlayModule.actions.setCurrentSpeech(`${currentSpeech + 1}`);
      }
    }
  },

  render() {
    const currentSpeech = Number(this.state.currentSpeech);
    const lastSpeechId = Number(this.state.lastSpeech);
    const tracedPlayer = this.state.tracedPlayer;
    const lastSpeechForSpeaker = Number(this.state.lastSpeechForSpeaker);
    const isEnd = currentSpeech === (tracedPlayer ? lastSpeechForSpeaker : lastSpeechId);

    return (
      <div className='next'
           style={ [style.navigator.next, (!this.state.currentSpeech || isEnd) && style.hide ]}
           onClick={this._nextSpeech}>
        <span style={ style.navigator.nextText}>&gt;</span>
      </div>
    );
  }

}));
