import { StyleSheet, Dimensions } from 'react-native';

// const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  containerScroll: {
    marginBottom: 330,
  },
  container: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 10,
  },
  text: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 3,
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
  },
});

export default styles;
