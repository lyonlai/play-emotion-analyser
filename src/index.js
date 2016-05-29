import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import DataPreprocessor from 'services/data-preprocessor';
import HenryIVPlay from 'data/henry_iv.json';

import PlayModule from 'modules/play';

// Render the main component into the dom
if (!window.mocha) {
  const result = DataPreprocessor.preprocessData(HenryIVPlay);
  PlayModule.actions.loadPlay(result);
  ReactDOM.render(<App />, document.getElementById('app'));
}

