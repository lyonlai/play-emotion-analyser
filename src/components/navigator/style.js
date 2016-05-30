export default {
  container: {
    width: '300px',
    height: '600px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    border: '1px solid #d3d3d3',
    display: 'flex',
    position: 'relative'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateX(-300px)'
  },
  showAct: {
    transform: 'translateX(0px)'
  }
}
