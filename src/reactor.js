import { Reactor } from 'nuclear-js'
import config from 'config';

const reactor = new Reactor({
  debug: config.debug
})

export default reactor
