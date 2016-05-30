import React from 'react';

import Reactor from 'reactor';

import PlayModules from 'modules/play';

import Scene from './scene';

import style from './styles';

import Header from './header';

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
      <div className='scenes'
           style={ style.container }>
        <Header />
        {
          this.state.scenes.map((scene, id) =>
            <Scene scene={scene} key={id} isSelected={ scene.get('id') === this.state.currentScene } />
          ).toList()
        }
      </div>
    )
  }

});
