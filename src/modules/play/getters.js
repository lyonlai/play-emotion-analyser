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
];

export const speechesForCurrentScene = [
  scenesForCurrentAct,
  currentScene,
  (scenes, current) =>
    current
      ? scenes.getIn([current, 'speeches'])
      : I({})
]

export const lastSpeechIdForCurrentScene = [
  speechesForCurrentScene,
  speeches => speeches
    .map(speech => Number(speech.get('id')))
    .sort()
    .last()
];

export const currentActTitle = [
  acts,
  currentAct,
  (actsForPlay, currentActId) =>
    currentActId
      ? actsForPlay.getIn([currentActId, 'title'])
      : ''
]

