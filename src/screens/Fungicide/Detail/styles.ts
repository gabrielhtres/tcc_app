import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginBottom: height * 0.37,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: height * 0.01,
  },

  text: {
    fontSize: 18,
    marginBottom: height * 0.02,
  },
});

export default styles;
