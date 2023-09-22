import { StyleSheet, Dimensions } from 'react-native';

const { width, height, fontScale } = Dimensions.get('window');

const styles = StyleSheet.create({
  input: {
    width: width * 0.77,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderRadius: 7,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.03,
  },
  inputIcon: {
    width: width * 0.1,
    height: height * 0.05,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInfo: {
    height: height * 0.8,
    width: width * 0.8,
    backgroundColor: '#FFF',
    padding: width * 0.05,
  },
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    padding: width * 0.02,
    marginBottom: height * 0.37,

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: height * 0.01,
    },

    text: {
      fontSize: 18,
      marginBottom: height * 0.02,
    },
  },
  percentageContainer: {
    width: width * 0.9,
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  radioButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 18,
    // fontWeight: 'bold',
    marginBottom: height * 0.03,
  },
  inputContainerDefault: {
    marginBottom: height * 0.03,
  },
  percentageThumb: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textThumb: {
    color: '#FFF',
  },
  radioLabelText: {
    fontSize: fontScale * 18,
    marginLeft: width * 0.02,
  },
});

export default styles;
