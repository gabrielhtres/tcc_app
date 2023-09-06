import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
  },
});

export default styles;
