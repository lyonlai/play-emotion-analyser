import Reactor from 'reactor';
import PlayStore from './stores/play';

Reactor.registerStores({
  play: PlayStore
});

module.exports = {
  getters: require('./getters'),
  actions: require('./actions')
}
