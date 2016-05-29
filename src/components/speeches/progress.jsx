import React from 'react';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import style from './styles/progress';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentSpeech: PlayModule.getters.currentSpeech
    }
  },

  render() {
    if (!this.state.currentSpeech) {
      return false;
    }

    const currentSpeech = Number(this.state.currentSpeech);
    const lastSpeeches = Number(Reactor.evaluate(PlayModule.getters.lastSpeechIdForCurrentScene));
    const computedStyle = { transform: `translateX(-${((lastSpeeches - currentSpeech) / lastSpeeches) * 100}%)`}
    return (
      <div style={ style.container }>
        <div style={ [style.progress, computedStyle] }></div>
      </div>
    )
  }

}));
