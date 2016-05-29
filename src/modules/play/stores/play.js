import { Store, toImmutable as I } from 'nuclear-js';
import actionTypes from '../action-types';

export default new Store({

  getInitialState() {
    return I({
      acts: {},
      ui: {
        act: null,
        scene: null,
        speech: null
      }
    });
  },

  initialize() {
    this.on(actionTypes.LOAD_PLAY, this._loadPlay);
    this.on(actionTypes.SET_CURRENT_ACT, this._setCurrentAct);
  },

  _loadPlay(state, { play }) {
    return state.set('acts', I(play));
  },

  _setCurrentAct(state, { actId }) {
    return state.setIn(['ui', 'act'], actId);;
  },

});
