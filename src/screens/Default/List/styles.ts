import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    margin: width * 0.05,
    fontSize: 20,
  },
  scrollContainer: {
    marginBottom: 20,
    minHeight: height * 0.8,
  },
});

export default styles;
