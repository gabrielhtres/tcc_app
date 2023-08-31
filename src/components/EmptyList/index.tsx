import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './styles';

function EmptyList() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faInbox} color="rgba(0, 0, 0, 0.2)" size={80} />
      <Text style={styles.title}>Não há registros</Text>
    </View>
  );
}

export default EmptyList;
