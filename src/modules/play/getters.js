import { toImmutable as I } from 'nuclear-js';

export const play = ['play'];

export const acts = ['play', 'acts'];

export const showingAct = ['play', 'ui', 'showingAct'];

export const currentAct = ['play', 'ui', 'act'];

export const currentScene = ['play', 'ui', 'scene'];

export const currentSpeech = ['play', 'ui', 'speech'];

export const tracedSpeaker = ['play', 'ui', 'speaker'];

export const scenesForCurrentAct = [
  acts,
  currentAct,
  (actsForPlay, currentActId) =>
    currentActId
      ? actsForPlay.getIn([currentActId, 'scenes']) || I({})
      : I({})
];

export const selectedScene = [
  scenesForCurrentAct,
  currentScene,
  (scenes, current) => scenes.get(current) || I({})
];

export const speechesForCurrentScene = [
  selectedScene,
  scene =>
    scene.get('speeches') || I({})
]

export const lastSpeechIdForCurrentScene = [
  speechesForCurrentScene,
  speeches => speeches
    .map(speech => Number(speech.get('id')))
    .sort()
    .last()
];

export const selectedSpeechForCurrentScene = [
  speechesForCurrentScene,
  currentSpeech,
  (speeches, current) =>
    current
      ? speeches.get(current) || I({})
      : I({})
];

export const speakerForCurrentScene = [
  selectedSpeechForCurrentScene,
  speech => (speech && speech.get('speaker')) || ''
];

export const emotionForSelectedSpeech = [
  selectedSpeechForCurrentScene,
  speech => (speech && speech.get('emotions')) || I({})
];

export const currentActTitle = [
  acts,
  currentAct,
  (actsForPlay, currentActId) =>
    currentActId
      ? actsForPlay.getIn([currentActId, 'title']) || ''
      : ''
];

export const speakerIndexesForCurrentScene = [
  selectedScene,
  scene =>
    scene.get('speakerIndexes') || I({})
];

export const speakersForCurrentScene = [
  speakerIndexesForCurrentScene,
  indexes =>
    indexes.keySeq().sort().toList()
];

export const tracedSpeakerIndexes = [
  speakerIndexesForCurrentScene,
  tracedSpeaker,
  (indexes, speaker) =>
    speaker
      ? (indexes.get(speaker) || I([])).sortBy(index => Number(index)) || I([])
      : I([])
];

export const firstSpeakerSpeech = [
  tracedSpeakerIndexes,
  indexes => indexes.first()
];

export const lastSpeakerSpeech = [
  tracedSpeakerIndexes,
  indexes => indexes.last()
];
