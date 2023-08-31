import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginBottom: height * 0.04,
    marginRight: height * 0.04,
  },
});

export default styles;
