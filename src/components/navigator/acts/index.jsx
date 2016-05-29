import React from 'react';

import Reactor from 'reactor';

import PlayModules from 'modules/play';

import Act from './act';

import style from './styles';

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      acts: PlayModules.getters.acts,
      currentAct: PlayModules.getters.currentAct
    };
  },

  render() {
    return (
      <div style={ style.container }>
        {
          this.state.acts.map((act, id) =>
            <Act act={act} key={id} isSelected={ act.get('id') === this.state.currentAct } />
          ).toList()
        }
      </div>
    )
  }

});
