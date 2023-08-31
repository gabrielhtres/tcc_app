import styles from './styles';

import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { View } from 'react-native';
import { MyTheme } from '../../../App';
import { Text, useTheme } from 'react-native-paper';

interface Props {
  onPress: () => void;
}

function SaveButton({ onPress }: Props) {
  const theme: MyTheme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.primary }}>
      <GestureHandlerRootView>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={{ color: theme.colors.primaryText }}>SALVAR</Text>
        </TouchableOpacity>
      </GestureHandlerRootView>
    </View>
  );
}

export default SaveButton;
