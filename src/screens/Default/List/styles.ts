import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    margin: width * 0.05,
    fontSize: 20,
  },
});

export default styles;
