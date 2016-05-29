import React from 'react';

import Acts from './acts';

import style from './style';

export default React.createClass({

  render() {
    return (
      <div style={ style.container }>
        <div style={ style.innerContainer }>
          <Acts />  
        </div>
      </div>
    )
  }

});
