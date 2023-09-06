import { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import styles from './styles';
import { MyTheme } from '../../../App';
import { maskCPF } from '../../utils/textMasks';
import TextError from '../../components/TextError';
import api from '../../utils/api';
import {
  saveStorageData,
  multiSaveStorageData,
} from '../../utils/storageService';

interface Props {
  navigation: any;
}

function SignIn({ navigation }: Props) {
  const theme: MyTheme = useTheme();
  const [cpf, setCpf] = useState<string>('');
  const [cpfError, setCpfError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  // const [hidePassword, setHideassword] = useState<boolean>(false);

  const makeSignIn = () => {
    api
      .post('/signin', { email: cpf, password })
      .then(res => {
        if (res.data.token && res.data.refreshToken) {
          saveStorageData('jwtToken', res.data.token);
          saveStorageData('jwtRefreshToken', res.data.refreshToken);
          multiSaveStorageData([
            ['id', res.data.id.toString()],
            ['name', res.data.name],
            ['email', res.data.email],
            // ['cpf', res.data.cpf],
            // ['phone', res.data.phone],
          ]);
          navigation.replace('ListAnalysis');
        }
      })
      .catch(err => console.log('erro', err.message));
  };

  const validateFields = () => {
    let haveError = false;
    // if (cpf.length < 14) {
    //   setCpfError(true);
    //   haveError = true;
    // }

    if (password.length === 0) {
      setPasswordError(true);
      haveError = true;
    }

    if (cpf.length === 0) {
      setCpfError(true);
      haveError = true;
    }

    if (haveError) {
      return false;
    }

    setCpfError(false);
    setPasswordError(false);

    makeSignIn();

    return true;
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>
      <TextInput
        label="CPF"
        mode="outlined"
        // keyboardType="numeric"
        style={styles.input}
        value={cpf}
        onChangeText={e => {
          // setCpf(maskCPF(e));
          setCpf(e);
          setCpfError(false);
        }}
        maxLength={14}
        error={cpfError}
      />
      {cpfError && (
        <TextError errorMessage="CPF inválido" style={styles.errorContainer} />
      )}
      <TextInput
        label="Senha"
        mode="outlined"
        style={styles.input}
        value={password}
        secureTextEntry={false}
        onChangeText={e => {
          setPassword(e);
          setPasswordError(false);
        }}
        error={passwordError}
      />
      {passwordError && (
        <TextError
          errorMessage="Senha inválida"
          style={styles.errorContainer}
        />
      )}
      {/* <GestureHandlerRootView>
        <TouchableWithoutFeedback
          style={styles.iconPassword}
          onPress={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </TouchableWithoutFeedback>
      </GestureHandlerRootView> */}
      <Button
        mode="contained-tonal"
        buttonColor={theme.colors.primary}
        textColor={theme.colors.primaryText}
        style={styles.button}
        onPress={() => {
          // if (validateFields()) {
          //   navigation.replace('ListAnalysis');
          // }
          validateFields();
        }}>
        ENTRAR
      </Button>
    </View>
  );
}

export default SignIn;
