import React from 'react';

import { mount } from 'enzyme';

import HenryIVPlay from 'data/henry_iv.json';

import PlayModule from 'modules/play';

import App from 'components/app';

describe('Component: App', () => {
  
  let app;
  
  before(() => {
    PlayModule.actions.loadPlay(HenryIVPlay);
    app = mount(<App />);
  });
  
  it('should have navigator', () => {
    app.find('.navigator').length.should.equal(1);
  });
  
});
