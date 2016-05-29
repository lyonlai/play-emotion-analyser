import React from 'react';

import Navigator from './navigator';

import Speech from './speeches';

import Graph from './graph';

import style from './style';

export default React.createClass({

  render() {
    return (
      <div style={ style.container }>
        <div style={ style.innerContainer }>
          <Navigator />
          <Speech />
          <Graph />
        </div>
      </div>
    );
  }

});
