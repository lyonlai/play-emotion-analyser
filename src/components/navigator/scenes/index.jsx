import React from 'react';

import Reactor from 'reactor';

import PlayModules from 'modules/play';

import Scene from './scene';

import style from './styles';

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      scenes: PlayModules.getters.scenesForCurrentAct,
      currentScene: PlayModules.getters.currentScene
    };
  },

  render() {
    return (
      <div style={ style.container }>
        {
          this.state.scenes.map((scene, id) =>
            <Scene scene={scene} key={id} isSelected={ scene.get('id') === this.state.currentScene } />
          ).toList()
        }
      </div>
    )
  }

});
