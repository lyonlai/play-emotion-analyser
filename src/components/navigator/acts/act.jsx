import React from 'react';
import { NumberConverter } from 'number-converter';

import style from './styles/act';

const numberConverter = new NumberConverter(NumberConverter.DECIMAL, NumberConverter.ROMAN_NUMERAL);

import PlayModule from 'modules/play';

import Radium from 'radium';

export default Radium(React.createClass({

  _onClick() {
    PlayModule.actions.setCurrentAct(this.props.act.get('id'));
    PlayModule.actions.hideAct();
  },

  render() {
    const id = this.props.act.get('id');
    const isSelected = this.props.isSelected;

    return (
      <div style={ [style.item, isSelected && style.selected] }
           onClick={ this._onClick }>
        { `ACT ${numberConverter.convert(id)}` }
      </div>
    )
  }

}));
