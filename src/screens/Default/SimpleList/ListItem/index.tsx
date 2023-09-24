import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MyTheme } from '../../../../../App';

interface Props {
  id: number;
  title: string;
  handleView: (id: number, name: string) => void;
}

function ListItem({ id, title, handleView }: Props) {
  const { width } = Dimensions.get('window');
  const theme: MyTheme = useTheme();
  // console.log('defaultId', defaultId);

  // const icons = {
  //   1: (
  //     <FontAwesomeIcon
  //       color="orange"
  //       size={width * 0.05}
  //       icon={faHourglassStart}
  //       style={styles.icon}
  //     />
  //   ),
  //   2: (
  //     <FontAwesomeIcon
  //       color="red"
  //       size={width * 0.05}
  //       icon={faXmark}
  //       style={styles.icon}
  //     />
  //   ),
  //   3: (
  //     <FontAwesomeIcon
  //       color="green"
  //       size={width * 0.05}
  //       icon={faCheck}
  //       style={styles.icon}
  //     />
  //   ),
  // };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
      key={id}>
      <View style={styles.leftContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableWithoutFeedback onPress={() => handleView(id, title)}>
          <FontAwesomeIcon
            color="rgba(0, 0, 0, 0.6)"
            icon={faEye}
            size={width * 0.04}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default ListItem;
