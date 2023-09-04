import { useState } from 'react';
import { Text } from 'react-native-paper';
import Menu from '../../../components/Menu';
import styles from './styles';
import Header from '../../../components/Header';
import ListItem from './ListItem';
import EmptyList from '../../../components/EmptyList';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

// type List<T> = T[];

interface Props {
  menuTitle: string;
  screenTitle: string;
  list: any[];
}

function DefaultListScreen({ menuTitle, screenTitle, list }: Props) {
  // const { width, height } = Dimensions.get('window');
  // const theme: MyTheme = useTheme();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <GestureHandlerRootView>
      {showMenu && <Menu />}

      <Header screenTitle={screenTitle} setShowMenu={setShowMenu} />

      <Text style={styles.title}>{menuTitle}</Text>

      <ScrollView style={{ marginBottom: 20 }}>
        {list.length > 0 ? (
          list.map(item => <ListItem title={item.title} key={item.id} />)
        ) : (
          <EmptyList />
        )}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default DefaultListScreen;
