import { Link } from '@react-navigation/native';
import { View, Image } from 'react-native';
import { Button, Text, TextInput, useTheme } from 'react-native-paper';
import styles from './styles';

function SignIn({ navigation }) {
  const theme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Entrar</Text>
      <TextInput label="CPF" mode="outlined" style={styles.input} />
      <TextInput label="Senha" mode="outlined" style={styles.input} />
      <Button
        mode="contained-tonal"
        buttonColor={theme.colors.primary}
        textColor={theme.colors.primaryText}
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}>
        ENTRAR
      </Button>
      <Link to="SignUp">
        <Text style={{ ...styles.link, color: theme.colors.primary }}>
          Cadastre-se
        </Text>
      </Link>
    </View>
  );
}

export default SignIn;
