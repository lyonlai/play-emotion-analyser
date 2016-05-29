import { Store, toImmutable as I } from 'nuclear-js';
import actionTypes from '../action-types';

export default new Store({

  getInitialState() {
    return I({
      acts: {},
      ui: {
        act: null,
        showingAct: true,
        scene: null,
        speech: null
      }
    });
  },

  initialize() {
    this.on(actionTypes.LOAD_PLAY, this._loadPlay);
    this.on(actionTypes.SET_CURRENT_ACT, this._setCurrentAct);
    this.on(actionTypes.SET_CURRENT_SCENE, this._setCurrentScene);
    this.on(actionTypes.SHOW_ACT, this._showAct);
    this.on(actionTypes.HIDE_ACT, this._hideAct);
  },

  _loadPlay(state, { play }) {
    return state.set('acts', I(play));
  },

  _setCurrentAct(state, { actId }) {
    return state.setIn(['ui', 'act'], actId);;
  },

  _setCurrentScene(state, { sceneId }) {
    return state.setIn(['ui', 'scene'], sceneId);;
  },

  _showAct(state) {
    return state.setIn(['ui', 'showingAct'], true);;
  },

  _hideAct(state) {
    return state.setIn(['ui', 'showingAct'], false);;
  }

});
