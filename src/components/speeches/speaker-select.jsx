import React from 'react';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import style from './styles/speaker-select';

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      speakersForCurrentScene: PlayModule.getters.speakersForCurrentScene,
      tracedSpeaker: PlayModule.getters.tracedSpeaker
    };
  },

  _onChange(e) {
    PlayModule.actions.traceSpeaker(e.target.value);
    const speechIndexesForPlayer = Reactor.evaluate(PlayModule.getters.tracedSpeakerIndexes);

    if (speechIndexesForPlayer.isEmpty()) {
      return;
    }

    const firstSpeech = speechIndexesForPlayer.first();
    PlayModule.actions.setCurrentSpeech(firstSpeech);
  },

  render() {
    const speakers = this.state.speakersForCurrentScene;

    if (speakers.isEmpty()) {
      return false;
    }

    const speaker = this.state.tracedSpeaker;

    return (
      <select value={speaker || ''}
              onChange={ this._onChange }
              style={ style.select }>
        <option value=''>Choose speaker to trace</option>
        {
          speakers.map((s, index) =>
            <option value={s} key={index}>{s}</option>
          ).toList()
        }
      </select>
    )
  }

});
