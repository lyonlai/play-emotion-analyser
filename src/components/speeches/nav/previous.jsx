import React from 'react';

import Reactor from 'reactor';
import PlayModule from 'modules/play';

import style from './styles/previous';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentSpeech: PlayModule.getters.currentSpeech
    };
  },

  _previousSpeech() {
    const currentSpeech = Number(this.state.currentSpeech);

    if (currentSpeech > 1) {
      PlayModule.actions.setCurrentSpeech(`${currentSpeech - 1}`);
    }

  },

  render() {
    const currentSpeech = Number(this.state.currentSpeech);
    const isBeginning = currentSpeech === 1;

    return (
      <div style={ [style.navigator.previous, (!this.state.currentSpeech || isBeginning) && style.hide ] }
           onClick={this._previousSpeech} >
        <span style={ style.navigator.previousText}>&lt;</span>
      </div>
    );
  }

}));
