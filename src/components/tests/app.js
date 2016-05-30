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

    it('click on act should show scene panel, clicking back btn should show act panel', () => {
      app.find('.navigator .acts .act').first().simulate('click');
      app.find('.navigator .container').get(0).style.transform.should.equal('translateX(-300px)');
      app.find('.navigator .scenes .header .back').simulate('click');
      app.find('.navigator .container').get(0).style.transform.should.equal('translateX(0px)');

    });

    it('each act should have corresponding scenes', () => {
      const acts = Reactor.evaluate(PlayModule.getters.acts);

      acts.toList().forEach((act, index) => {
        const scenes = act.get('scenes').toList();
        app.find('.navigator .acts .act').at(index).simulate('click');
        app.find('.navigator .scenes .scene').length.should.equal(scenes.size);
        app.find('.navigator .scenes .scene')
          .map(el => el.node.innerText)
          .forEach((txt, index) => txt.should.include(scenes.getIn([index, 'title']), 'should have correct title'))
      });
    });

    it('clicking on each scene should show right set of speeches', () => {
      const acts = Reactor.evaluate(PlayModule.getters.acts);

      acts.toList().forEach((act, index) => {
        const scenes = act.get('scenes').toList();
        app.find('.navigator .acts .act').at(index).simulate('click');
        app.find('.navigator .scenes .scene').forEach((sceneEl, index) => {
          const speeches = scenes.getIn([index, 'speeches'])
            .sortBy(speech => Number(speech.get('id')))
            .toList();
          sceneEl.simulate('click');
          app.find('.speeches .speech').length.should.equal(speeches.size);
          app.find('.speeches .speech')
            .map(el => el.node.innerText)
            .forEach((txt, index) => {
              speeches.getIn([index, 'displayableContent']).forEach(content => txt.should.include(content.get('text')));
            })
        });
      });
    });

    it('speech navigator should work as expected', () => {
      app.find('.navigator .acts .act').first().simulate('click');
      app.find('.navigator .scenes .scene').first().simulate('click');
      app.find('.speeches .next').simulate('click');
      app.find('.speeches .container').get(0).style.transform.should.equal('translateX(-600px)');
      app.find('.speeches .previous').simulate('click');
      app.find('.speeches .container').get(0).style.transform.should.equal('translateX(0px)');

    });

  });

});
