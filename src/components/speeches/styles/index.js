export default {
  container: {
    width: '600px',
    height: '700px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    borderRight: '1px solid #d3d3d3',
    borderTop: '1px solid #d3d3d3',
    borderBottom: '1px solid #d3d3d3',
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
  progressIndicator: {
    position: 'absolute',
    width: '600px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '0px',
    left: '0px',
    zIndex: '10'
  },
  hide: {
    display: 'none'
  }
};
