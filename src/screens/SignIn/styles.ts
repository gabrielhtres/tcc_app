import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    display: 'flex',
    // justifyContent: 'center',
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
    marginBottom: width * 0.05,
  },
  link: { fontSize: 15 },
});

export default styles;
