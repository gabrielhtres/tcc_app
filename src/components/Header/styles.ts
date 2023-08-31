import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05,
  },
  menuIcon: { marginRight: width * 0.05 },
  favoriteIcon: { marginRight: width * 0.07 },
  searchIcon: { marginRight: width * 0.05 },
});

export default styles;
