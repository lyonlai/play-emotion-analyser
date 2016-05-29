import Reactor from 'reactor';
import actionTypes from './action-types';

export function loadPlay(play) {
  Reactor.dispatch(actionTypes.LOAD_PLAY, { play });
}
