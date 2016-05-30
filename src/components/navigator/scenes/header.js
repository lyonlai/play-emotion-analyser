import React from 'react';

import style from './styles/header';

import Reactor from 'reactor';

import PlayModule from 'modules/play';

export default React.createClass({

  mixins: [Reactor.ReactMixin],

  getDataBindings() {
    return {
      currentActTitle: PlayModule.getters.currentActTitle
    };
  },

  _onClick() {
    PlayModule.actions.showAct();
  },

  render() {
    return (
      <div className='header'
           style={style.container}>
        <div className='back'
             style={ style.back }
             onClick={ this._onClick }>&lt;</div>
        <div style={ style.title }>{ this.state.currentActTitle}</div>
      </div>
    );
  }

});
