import React from 'react';

import styles from './styles/speech';

export default React.createClass({

  render() {
    const contents = this.props.speech.get('displayableContent');

    return (
      <div style={ styles.container }>
        {
          contents.map((content, index) => {
            const isLine = content.get('isLine');
            return isLine
              ? (<div key={index}><p style={ styles.speaker }>{ content.get('speaker') }</p><p style={ styles.speech }>{ content.get('text') }</p></div>)
              : (<div key={index} style={ styles.action }> { content.get('text') }</div>)
          })
        }
      </div>
    );
  }

});
