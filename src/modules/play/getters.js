import { toImmutable as I } from 'nuclear-js';

export const play = ['play'];

export const acts = ['play', 'acts'];

export const showingAct = ['play', 'ui', 'showingAct'];

export const currentAct = ['play', 'ui', 'act'];

export const currentScene = ['play', 'ui', 'scene'];

export const currentSpeech = ['play', 'ui', 'speech'];

export const scenesForCurrentAct = [
  acts,
  currentAct,
  (actsForPlay, currentActId) =>
    currentActId
      ? actsForPlay.getIn([currentActId, 'scenes'])
      : I({})
]

