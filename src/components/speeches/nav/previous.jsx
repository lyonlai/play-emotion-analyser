import React from 'react';

import Reactor from 'reactor';
import PlayModule from 'modules/play';

import style from './styles/previous';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentSpeech: PlayModule.getters.currentSpeech,
      lastSpeech: PlayModule.getters.lastSpeechIdForCurrentScene,
      tracedPlayer: PlayModule.getters.tracedSpeaker,
      firstSpeakerSpeech: PlayModule.getters.firstSpeakerSpeech
    };
  },

  _previousSpeech() {
    const currentSpeech = Number(this.state.currentSpeech);
    const tracedPlayer = this.state.tracedPlayer;

    if (tracedPlayer) {
      const firstSpeechForSpeaker = Number(this.state.firstSpeakerSpeech);

      if(currentSpeech > firstSpeechForSpeaker) {
        const speechIndexes = Reactor.evaluate(PlayModule.getters.tracedSpeakerIndexes);
        const index = speechIndexes.indexOf(this.state.currentSpeech);
        PlayModule.actions.setCurrentSpeech(`${speechIndexes.get(index - 1)}`);
      }
    } else {
      if (currentSpeech > 1) {
        PlayModule.actions.setCurrentSpeech(`${currentSpeech - 1}`);
      }
    }

  },

  render() {
    const currentSpeech = Number(this.state.currentSpeech);
    const tracedPlayer = this.state.tracedPlayer;
    const firstSpeechForSpeaker = Number(this.state.firstSpeakerSpeech);
    const isBeginning = currentSpeech === (tracedPlayer ? firstSpeechForSpeaker : 1);

    return (
      <div style={ [style.navigator.previous, (!this.state.currentSpeech || isBeginning) && style.hide ] }
           onClick={this._previousSpeech} >
        <span style={ style.navigator.previousText}>&lt;</span>
      </div>
    );
  }

}));
