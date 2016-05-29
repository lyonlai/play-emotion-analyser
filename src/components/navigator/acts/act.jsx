import React from 'react';
import { NumberConverter } from 'number-converter';

import style from './styles/act';

const numberConverter = new NumberConverter(NumberConverter.DECIMAL, NumberConverter.ROMAN_NUMERAL);

export default React.createClass({

  render() {
    const id = this.props.act.get('id');
    const isSelected = this.props.isSelected;
    return (
      <div style={ style.item }>
        { `ACT ${numberConverter.convert(id)}` }
      </div>
    )
  }

});
