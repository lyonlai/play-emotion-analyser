import React from 'react';
import { NumberConverter } from 'number-converter';

import style from './styles/scene';

const numberConverter = new NumberConverter(NumberConverter.DECIMAL, NumberConverter.ROMAN_NUMERAL);

import PlayModule from 'modules/play';

import Radium from 'radium';

import Reactor from 'reactor';

export default Radium(React.createClass({

  _onClick() {
    Reactor.batch(() => {
      const currentScene = Reactor.evaluate(PlayModule.getters.currentScene);
      const sceneId = this.props.scene.get('id');
      if (currentScene != sceneId) {
        PlayModule.actions.setCurrentScene(sceneId);
        PlayModule.actions.setCurrentSpeech('1');
        PlayModule.actions.traceSpeaker('');
      }  
    });
  },

  render() {
    const id = this.props.scene.get('id');
    const title = this.props.scene.get('title');
    const isSelected = this.props.isSelected;

    return (
      <div className='scene'
           style={ [style.item, isSelected && style.selected] }
           onClick={ this._onClick }>
        { `Scene ${numberConverter.convert(id)}: ${title}` }
      </div>
    )
  }

}));
