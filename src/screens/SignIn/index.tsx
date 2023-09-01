import { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import styles from './styles';
import { MyTheme } from '../../../App';
import { maskCPF } from '../../utils/textMasks';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import TextError from '../../components/TextError';
import api from '../../utils/api';
// import {
//   GestureHandlerRootView,
//   TouchableWithoutFeedback,
// } from 'react-native-gesture-handler';

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

    if (haveError) {
      return false;
    }

    setCpfError(false);
    setPasswordError(false);

    api
      .post('/signin', { email: cpf, password })
      .then(res => console.log(res))
      .catch(err => console.log('erro', err.message));

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
          console.log('password', e);
          setPassword(e);
          setPasswordError(false);
        }}
        error={passwordError}
      />
      {passwordError && (
        <TextError
          errorMessage="A senha deve estar preenchida"
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
