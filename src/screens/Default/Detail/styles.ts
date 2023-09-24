import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    margin: width * 0.05,
  },
  title: {
    margin: width * 0.05,
    fontSize: 20,
  },
  fieldsContainer: {
    backgroundColor: '#FFF',
    marginTop: width * 0.03,
    paddingRight: width * 0.05,
    paddingLeft: width * 0.05,
    minHeight: height * 0.9,
  },
});

export default styles;
