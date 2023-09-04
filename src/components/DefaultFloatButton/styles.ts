import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width * 0.15,
    height: width * 0.15,
    bottom: height * 0.04,
    right: height * 0.04,
    borderRadius: 100,
  },
  button: {
    width: width * 0.15,
    height: width * 0.15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
