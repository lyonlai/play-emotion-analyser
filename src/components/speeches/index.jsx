import React from 'react';

import style from './styles';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import Speech from './speech';

import Radium from 'radium';

import Progress from './progress';

import Previous from './nav/previous';
import Next from './nav/next';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      speeches: PlayModule.getters.speechesForCurrentScene,
      currentSpeech: PlayModule.getters.currentSpeech
    };
  },


  render() {
    const currentSpeech = Number(this.state.currentSpeech);
    const computedStyle = currentSpeech ? { transform: `translateX(${(currentSpeech - 1) * - 600}px)`} : {}
    const lastSpeechId = Reactor.evaluate(PlayModule.getters.lastSpeechIdForCurrentScene);
    const currentSceneId = Reactor.evaluate(PlayModule.getters.currentScene);
    const currentAct = Reactor.evaluate(PlayModule.getters.currentAct);

    return (
      <div style={ style.container }>
        <Previous />
        <div style={ [style.progressIndicator, !currentSpeech && style.hide]} >
         {currentSpeech} / {lastSpeechId}
        </div>
        <div style={ [style.innerContainer, computedStyle] }>

          {
            this.state.speeches
              .sortBy(speech => Number(speech.get('id')))
              .map(speech =>
                <Speech speech={speech}
                        act={currentAct}
                        scene={currentSceneId}
                        key={`${currentAct}.${currentSceneId}.${speech.get('id')}`} />
              ).toList()
          }

        </div>
        <Next />
        <Progress />
      </div>
    );
  }

}));
