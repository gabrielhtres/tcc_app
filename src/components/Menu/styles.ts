import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.6,
    height: height,
    zIndex: 999,

    userContainer: {
      padding: width * 0.05,
    },
  },
  imageContainer: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: width * 0.4,
    height: height * 0.12,
    marginBottom: height * 0.02,
  },
  closeIcon: {
    position: 'absolute',
    right: width * 0.06,
    top: height * 0.025,
  },
});

export default styles;
