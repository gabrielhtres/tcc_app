import {
  faCheck,
  faEye,
  faHourglassStart,
  faList,
  faPen,
  faSprayCan,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MyTheme } from '../../../../../App';

interface Props {
  id: number;
  defaultId?: number;
  statusId: 1 | 2 | 3;
  title: string;
  simpleList?: boolean;
  fungicideList?: boolean;
  handleEdit: (id: number, name: string) => void;
  handleView: (id: number, name: string) => void;
  handleList: (id: number, name: string) => void;
  handleRemove: (id: number) => void;
}

function ListItem({
  id,
  title,
  statusId,
  simpleList,
  fungicideList,
  defaultId,
  handleEdit,
  handleView,
  handleRemove,
  handleList,
}: Props) {
  const { width } = Dimensions.get('window');
  const theme: MyTheme = useTheme();

  const icons = {
    1: (
      <FontAwesomeIcon
        color="orange"
        size={width * 0.05}
        icon={faHourglassStart}
        style={styles.icon}
      />
    ),
    2: (
      <FontAwesomeIcon
        color="red"
        size={width * 0.05}
        icon={faXmark}
        style={styles.icon}
      />
    ),
    3: (
      <FontAwesomeIcon
        color="green"
        size={width * 0.05}
        icon={faCheck}
        style={styles.icon}
      />
    ),
  };

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
      key={id}>
      <View style={styles.leftContainer}>
        {icons[statusId as 1 | 2 | 3]}
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {!simpleList && (
          <TouchableWithoutFeedback onPress={() => handleEdit(id, title)}>
            <FontAwesomeIcon
              color="rgba(0, 0, 0, 0.6)"
              icon={faPen}
              size={width * 0.04}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
        )}
        <TouchableWithoutFeedback onPress={() => handleView(id, title)}>
          <FontAwesomeIcon
            color="rgba(0, 0, 0, 0.6)"
            icon={faEye}
            size={width * 0.04}
            style={styles.icon}
          />
        </TouchableWithoutFeedback>
        {!simpleList && (
          <>
            <TouchableWithoutFeedback
              onPress={() => handleList(defaultId || id, title)}>
              <FontAwesomeIcon
                color="rgba(0, 0, 0, 0.6)"
                icon={!fungicideList ? faList : faSprayCan}
                size={width * 0.04}
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleRemove(id)}>
              <FontAwesomeIcon
                color="rgba(0, 0, 0, 0.6)"
                icon={faTrash}
                size={width * 0.04}
                style={styles.icon}
              />
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
    </View>
  );
}

export default ListItem;
