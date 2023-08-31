import { Dimensions, StyleSheet } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height * 0.07,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05,
  },
  icon: {
    marginRight: width * 0.05,
  },
  text: {
    fontSize: fontScale * 18,
  },
});

export default styles;
