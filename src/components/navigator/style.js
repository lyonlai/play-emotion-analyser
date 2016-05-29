export default {
  container: {
    width: '300px',
    height: '500px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    border: '1px solid #81DEFC',
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
