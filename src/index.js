import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import HenryIVPlay from 'data/henry_iv.json';

import PlayModule from 'modules/play';

window.analyser = EmotionAnalyser;

// Render the main component into the dom
if (!window.mocha) {
  PlayModule.actions.loadPlay(HenryIVPlay);
  ReactDOM.render(<App />, document.getElementById('app'));
}

