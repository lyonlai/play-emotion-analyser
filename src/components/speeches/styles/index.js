export default {
  container: {
    width: '500px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    borderRight: '1px solid #81DEFC',
    borderTop: '1px solid #81DEFC',
    borderBottom: '1px solid #81DEFC',
    display: 'flex',
    position: 'relative'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(0px)'
  },
  navigator: {
    next: {
      position: 'absolute',
      top: '0px',
      left: '250px',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      opacity: '0.5',
      width: '250px',
      height: '500px',
      cursor: 'pointer',
      zIndex: '10'
    },
    previous: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      opacity: '0.5',
      width: '250px',
      height: '500px',
      cursor: 'pointer',
      zIndex: '10'
    },
    nextText: {
      marginRight: '25px'
    },
    previousText: {
      marginLeft: '25px'
    }
  },
  hide: {
    display: 'none'
  }
};
