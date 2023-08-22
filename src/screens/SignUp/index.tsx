import { View, Image } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import styles from '../SignIn/styles';

function SignIn({ navigation }) {
  const theme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logoSignUp}
      />
      <Text style={styles.title}>Cadastro</Text>
      <TextInput label="CPF" mode="outlined" style={styles.input} />
      <TextInput label="Nome Completo" mode="outlined" style={styles.input} />
      <TextInput label="E-mail" mode="outlined" style={styles.input} />
      <TextInput label="Telefone" mode="outlined" style={styles.input} />
      <TextInput label="Senha" mode="outlined" style={styles.input} />
      <Button
        mode="contained-tonal"
        buttonColor={theme.colors.primary}
        textColor={theme.colors.primaryText}
        style={styles.button}
        onPress={() => navigation.navigate('SignIn')}>
        CADASTRAR
      </Button>
    </View>
  );
}

export default SignIn;
