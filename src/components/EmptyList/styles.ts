import { Dimensions, StyleSheet } from 'react-native';

const { height, fontScale } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.65,
  },

  title: {
    fontSize: fontScale * 20,
    marginTop: height * 0.02,
    opacity: 0.3,
  },
});

export default styles;
