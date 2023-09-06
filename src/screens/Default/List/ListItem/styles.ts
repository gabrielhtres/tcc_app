import { StyleSheet, Dimensions } from 'react-native';

const { width, fontScale } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    padding: width * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomStyle: 'solid',
    marginTop: width * 0.02,
  },
  title: {
    marginLeft: width * 0.04,
    marginTop: width * 0.02,
    fontSize: fontScale * 18,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: width * 0.02,
    top: width * 0.025,
    backgroundColor: '#FFF',
  },
  icon: { margin: width * 0.025 },
});

export default styles;
