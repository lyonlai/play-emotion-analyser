import Reactor from 'reactor';
import actionTypes from './action-types';

export function loadPlay(play) {
  Reactor.dispatch(actionTypes.LOAD_PLAY, { play });
}

export function setCurrentAct(actId) {
  Reactor.dispatch(actionTypes.SET_CURRENT_ACT, { actId });
}
