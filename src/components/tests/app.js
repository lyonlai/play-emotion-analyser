import React from 'react';

import { mount } from 'enzyme';

import HenryIVPlay from 'data/henry_iv.json';

import PlayModule from 'modules/play';

import Reactor from 'reactor';

import App from 'components/app';

describe('Component: App', () => {

  let app;

  before(() => {
    PlayModule.actions.loadPlay(HenryIVPlay);
    app = mount(<App />);
  });

  describe('navigator', () => {

    beforeEach(() => {
      PlayModule.actions.resetUI();
    });

    it('should have navigator', () => {
      app.find('.navigator').length.should.equal(1);
    });

    it('should have acts', () => {
      app.find('.navigator .acts').length.should.equal(1);
      app.find('.navigator .acts .act').length.should.equal(5);
    });

    it('each act should have corresponding scenes', () => {
      const acts = Reactor.evaluate(PlayModule.getters.acts);

      acts.toList().forEach((act, index) => {
        const scenes = act.get('scenes');
        app.find('.navigator .acts .act').at(index).simulate('click');
        app.find('.navigator .scenes .scene').length.should.equal(scenes.size);
      })
    });
  });

});
