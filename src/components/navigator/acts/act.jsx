import React from 'react';
import { NumberConverter } from 'number-converter';

import style from './styles/act';

const numberConverter = new NumberConverter(NumberConverter.DECIMAL, NumberConverter.ROMAN_NUMERAL);

import PlayModule from 'modules/play';

export default React.createClass({

  _onClick() {
    PlayModule.actions.setCurrentAct(this.props.act.get('id'));
  },

  render() {
    const id = this.props.act.get('id');
    const isSelected = this.props.isSelected;
    const styles = Object.assign({}, style.item, isSelected && style.selected);

    return (
      <div style={ styles } onClick={ this._onClick }>
        { `ACT ${numberConverter.convert(id)}` }
      </div>
    )
  }

});
