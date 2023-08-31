import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';

import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { View } from 'react-native';
import { MyTheme } from '../../../App';
import { useTheme } from 'react-native-paper';

interface Props {
  onPress: () => void;
}

function FloatAddButton({ onPress }: Props) {
  const theme: MyTheme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
      <GestureHandlerRootView>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <FontAwesomeIcon icon={faPlus} color="white" />
        </TouchableOpacity>
      </GestureHandlerRootView>
    </View>
  );
}

export default FloatAddButton;
