import React from 'react';

import Acts from './acts';
import Scenes from './scenes';

import style from './style';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      showingAct: PlayModule.getters.showingAct
    };
  },

  render() {
    return (
      <div style={ style.container }>
        <div style={ [style.innerContainer, this.state.showingAct && style.showAct] }>
          <Acts />
          <Scenes />
        </div>
      </div>
    )
  }

}));
