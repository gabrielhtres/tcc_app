import { faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';
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
  type: 'save' | 'add';
}

function DefaultFloatButton({ onPress, type }: Props) {
  const theme: MyTheme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
      <GestureHandlerRootView>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          {type === 'add' && <FontAwesomeIcon icon={faPlus} color="white" />}
          {type === 'save' && (
            <FontAwesomeIcon icon={faFloppyDisk} color="white" />
          )}
        </TouchableOpacity>
      </GestureHandlerRootView>
    </View>
  );
}

export default DefaultFloatButton;
