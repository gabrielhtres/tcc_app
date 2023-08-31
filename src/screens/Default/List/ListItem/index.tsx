import {
  faCheck,
  faEye,
  faHourglassStart,
  faList,
  faPen,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions, View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

interface Props {
  title: string;
}

function ListItem({ title }: Props) {
  const { width } = Dimensions.get('window');

  const icons = {
    'Análise 1': (
      <FontAwesomeIcon
        color="orange"
        size={width * 0.05}
        icon={faHourglassStart}
        style={styles.icon}
      />
    ),
    'Análise 2': (
      <FontAwesomeIcon
        color="green"
        size={width * 0.05}
        icon={faCheck}
        style={styles.icon}
      />
    ),
    'Análise 3': (
      <FontAwesomeIcon
        color="red"
        size={width * 0.05}
        icon={faXmark}
        style={styles.icon}
      />
    ),
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {icons[title as keyof icons]}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        <FontAwesomeIcon
          color="rgba(0, 0, 0, 0.6)"
          icon={faPen}
          size={width * 0.04}
          style={styles.icon}
        />
        <FontAwesomeIcon
          color="rgba(0, 0, 0, 0.6)"
          icon={faEye}
          size={width * 0.04}
          style={styles.icon}
        />
        <FontAwesomeIcon
          color="rgba(0, 0, 0, 0.6)"
          icon={faList}
          size={width * 0.04}
          style={styles.icon}
        />
      </View>
    </View>
  );
}

export default ListItem;
