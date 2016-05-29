import React from 'react';
import { NumberConverter } from 'number-converter';

import style from './styles/scene';

const numberConverter = new NumberConverter(NumberConverter.DECIMAL, NumberConverter.ROMAN_NUMERAL);

import PlayModule from 'modules/play';

import Radium from 'radium';

export default Radium(React.createClass({

  _onClick() {
    PlayModule.actions.setCurrentScene(this.props.scene.get('id'));
  },

  render() {
    const id = this.props.scene.get('id');
    const title = this.props.scene.get('title');
    const isSelected = this.props.isSelected;

    return (
      <div style={ [style.item, isSelected && style.selected] }
           onClick={ this._onClick }>
        { `Scene ${numberConverter.convert(id)}: ${title}` }
      </div>
    )
  }

}));
