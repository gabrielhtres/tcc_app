import { Dimensions, Image, View } from 'react-native';
import { Avatar, Text, useTheme } from 'react-native-paper';
import styles from './styles';
import MenuItem from './MenuItem';
import {
  faUser,
  faList,
  faChartBar,
  faCircleInfo,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { MyTheme } from '../../../App';

function Menu() {
  const theme: MyTheme = useTheme();
  const { fontScale } = Dimensions.get('window');

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.secondary,
      }}>
      <View style={styles.container.userContainer}>
        <Avatar.Image
          source={require('../../assets/default-avatar.png')}
          size={50}
        />
        <Text
          style={{
            color: theme.colors.primaryText,
            fontSize: fontScale * 18,
          }}>
          Usuário
        </Text>
        <Text style={{ color: theme.colors.primaryText }}>
          usuario@email.com
        </Text>
      </View>
      <MenuItem icon={faUser} label="Meu Perfil" route="/teste" />
      <MenuItem icon={faList} label="Análises" route="/teste" />
      <MenuItem icon={faChartBar} label="Escalas" route="/teste" />
      <MenuItem icon={faCircleInfo} label="Suporte e Ajuda" route="/teste" />
      <MenuItem icon={faArrowRightFromBracket} label="Sair" route="/teste" />

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
    </View>
  );
}

export default Menu;
