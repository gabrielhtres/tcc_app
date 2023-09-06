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

interface Props {
  menuTitle: string;
  screenTitle: string;
  list: any[];
  screen: string;
  routeDelete: string;
  navigation: any;
}

function DefaultListScreen({
  menuTitle,
  screenTitle,
  list,
  screen,
  routeDelete,
  navigation,
}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <GestureHandlerRootView>
      {showMenu && <Menu />}

      <Header screenTitle={screenTitle} setShowMenu={setShowMenu} />

      <Text style={styles.title}>{menuTitle}</Text>

      <ScrollView style={styles.scrollContainer}>
        {list.length > 0 ? (
          list.map(item => (
            <ListItem
              id={item.id}
              title={item.name}
              statusId={item.statusId}
              screen={screen}
              routeDelete={routeDelete}
              navigation={navigation}
              key={item.id}
            />
          ))
        ) : (
          <EmptyList />
        )}
      </ScrollView>
    </GestureHandlerRootView>
  );
}

export default DefaultListScreen;
