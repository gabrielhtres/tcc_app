import { ActivityIndicator, useTheme } from 'react-native-paper';
import styles from './styles';
import { MyTheme } from '../../../App';

function Loader() {
  const theme: MyTheme = useTheme();
  return (
    <ActivityIndicator
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
      size="large"
    />
  );
}

export default Loader;
