import Reactor from 'reactor';
import actionTypes from './action-types';

export function loadPlay(play) {
  Reactor.dispatch(actionTypes.LOAD_PLAY, { play });
}

export function setCurrentAct(actId) {
  Reactor.dispatch(actionTypes.SET_CURRENT_ACT, { actId });
}

export function setCurrentScene(sceneId) {
  Reactor.dispatch(actionTypes.SET_CURRENT_SCENE, { sceneId });
}

export function setCurrentSpeech(speechId) {
  Reactor.dispatch(actionTypes.SET_CURRENT_SPEECH, { speechId });
}

export function traceSpeaker(speaker) {
  Reactor.dispatch(actionTypes.TRACE_SPEAKER, { speaker });
}

export function showAct() {
  Reactor.dispatch(actionTypes.SHOW_ACT);
}

export function hideAct() {
  Reactor.dispatch(actionTypes.HIDE_ACT);
}

export function resetUI() {
  Reactor.dispatch(actionTypes.RESET_UI);
}
