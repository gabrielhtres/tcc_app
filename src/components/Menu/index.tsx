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
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { MyTheme } from '../../../App';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

interface Props {
  handleViewMenu: () => void;
}

function Menu({ handleViewMenu }: Props) {
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
        <GestureHandlerRootView style={styles.closeIcon}>
          <TouchableOpacity onPress={handleViewMenu}>
            <FontAwesomeIcon
              icon={faClose}
              size={fontScale * 20}
              color={theme.colors.primaryText}
            />
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
      <MenuItem icon={faUser} label="Meu Perfil" route="/user" />
      <MenuItem icon={faList} label="Análises" route="/analysis" />
      <MenuItem icon={faChartBar} label="Escalas" route="/scale" />
      <MenuItem icon={faCircleInfo} label="Suporte e Ajuda" route="/help" />
      <MenuItem icon={faArrowRightFromBracket} label="Sair" route="/logout" />

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>
    </View>
  );
}

export default Menu;
