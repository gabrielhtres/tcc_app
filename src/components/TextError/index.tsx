import { MyTheme } from '../../../App';
import { Text, useTheme } from 'react-native-paper';
import { View } from 'react-native';

interface Props {
  errorMessage: string;
  style: any;
}

function TextError({ errorMessage, style }: Props) {
  const theme: MyTheme = useTheme();

  return (
    <View style={style}>
      <Text style={{ color: theme.colors.error }}>{errorMessage}</Text>
    </View>
  );
}

export default TextError;
