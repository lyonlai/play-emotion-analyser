import React from 'react';

import style from './styles/progress-indicator';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentSpeech: PlayModule.getters.currentSpeech,
      lastSpeechId: PlayModule.getters.lastSpeechIdForCurrentScene
    };
  },

  render() {
    const currentSpeech = this.state.currentSpeech;
    const lastSpeechId = this.state.lastSpeechId;

    return (
      <div style={ [style.progressIndicator, !currentSpeech && style.hide]} >
        {currentSpeech} / {lastSpeechId}
      </div>
    );
  }

}));
