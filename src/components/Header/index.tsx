import { TouchableOpacity } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faHeart,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import { MyTheme } from '../../../App';
import { useDispatch } from 'react-redux';
import { setMenuVisible } from '../../store/slices/menuSlice';

interface Props {
  screenTitle: string;
}

function Header({ screenTitle }: Props) {
  const theme: MyTheme = useTheme();
  const dispatch = useDispatch();

  return (
    <Appbar.Header
      mode="small"
      style={{ ...styles.header, backgroundColor: theme.colors.primary }}>
      <TouchableOpacity onPress={() => dispatch(setMenuVisible(true))}>
        <FontAwesomeIcon
          size={20}
          icon={faBars}
          style={styles.menuIcon}
          color={theme.colors.primaryText}
        />
      </TouchableOpacity>
      <Appbar.Content title={screenTitle} color={theme.colors.primaryText} />
      <FontAwesomeIcon
        size={20}
        icon={faHeart}
        style={styles.favoriteIcon}
        color={theme.colors.primaryText}
      />
      <TouchableOpacity>
        <FontAwesomeIcon
          size={20}
          icon={faMagnifyingGlass}
          style={styles.searchIcon}
          color={theme.colors.primaryText}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
}

export default Header;
