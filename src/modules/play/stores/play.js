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
  },

  _loadPlay(state, { play }) {
    return state.set('acts', I(play));
  }

});
