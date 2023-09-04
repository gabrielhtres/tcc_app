import { StyleSheet, Dimensions } from 'react-native';

const { /* width, */ height } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    marginBottom: height * 0.03,
  },
});

export default styles;
