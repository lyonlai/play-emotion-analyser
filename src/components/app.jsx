import React from 'react';

import Navigator from './navigator';

import Speech from './speeches';

import style from './style';

export default React.createClass({

  render() {
    return (
      <div style={ style.container }>
        <Navigator />
        <Speech />
      </div>
    );
  }

});
