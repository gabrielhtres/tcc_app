import { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import styles from './styles';
import { MyTheme } from '../../../App';
import { maskCPF } from '../../utils/textMasks';

interface Props {
  navigation: any;
}

function SignIn({ navigation }: Props) {
  const theme: MyTheme = useTheme();
  const [cpf, setCpf] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const validateFields = () => {
    if (cpf.length < 14) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>
      <TextInput
        label="CPF"
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
        value={cpf}
        onChangeText={e => setCpf(maskCPF(e))}
        maxLength={14}
        error={error}
      />
      <TextInput
        label="Senha"
        mode="outlined"
        style={styles.input}
        secureTextEntry
      />
      <Button
        mode="contained-tonal"
        buttonColor={theme.colors.primary}
        textColor={theme.colors.primaryText}
        style={styles.button}
        onPress={() =>
          /*navigation.navigate('ListAnalysis')*/ validateFields()
        }>
        ENTRAR
      </Button>
    </View>
  );
}

export default SignIn;
