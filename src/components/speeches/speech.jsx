import React from 'react';

import styles from './styles/speech';

export default React.createClass({

  render() {
    const contents = this.props.speech.get('displayableContent');
    const {act, scene, speech} = this.props;
    const key = `${act}.${scene}.${speech.get('id')}.`;

    return (
      <div className='speech'
           style={ styles.container }>
        {
          contents.map((content, index) => {
            const isLine = content.get('isLine');
            return isLine
              ? (<div key={`${key}${index}`}><p style={ styles.speaker }>{ content.get('speaker') }</p><p style={ styles.speech }>{ content.get('text') }</p></div>)
              : (<div key={`${key}${index}`} style={ styles.action }> { content.get('text') }</div>)
          })
        }
      </div>
    );
  }

});
