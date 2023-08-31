import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginBottom: width * 0.05,
    marginTop: height * 0.2,
  },
  logoSignUp: {
    marginTop: height * 0.1,
  },
  title: { marginBottom: width * 0.05, fontSize: 23 },
  input: {
    width: width * 0.8,
    marginBottom: width * 0.05,
    height: height * 0.06,
  },
  button: {
    width: width * 0.8,
    borderRadius: 4,
    height: height * 0.06,
    display: 'flex',
    justifyContent: 'center',
  },
  link: { fontSize: 15 },
  iconPassword: {
    position: 'relative',
    right: 2,
    // top: height * 0.5,
    backgroundColor: 'red',
  },
  errorContainer: {
    width: width * 0.8,
    marginTop: -(width * 0.04),
    color: 'red',
  },
});

export default styles;
