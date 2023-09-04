import { useState } from 'react';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../../../components/Menu';
import styles from './styles';
import Header from '../../../components/Header';
import ListItem from './ListItem';
import EmptyList from '../../../components/EmptyList';

// type List<T> = T[];

interface Props {
  menuTitle: string;
  screenTitle: string;
  list: any[];
}

function DefaultListScreen({ menuTitle, screenTitle, list }: Props) {
  // const { width, height } = Dimensions.get('window');
  // const theme: MyTheme = useTheme();
  console.log('list', list);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView>
      {showMenu && <Menu />}

      <Header screenTitle={screenTitle} setShowMenu={setShowMenu} />

      <Text style={styles.title}>{menuTitle}</Text>

      {list && list.length > 0 ? (
        list.map(item => <ListItem title={item.name} key={item.id} />)
      ) : (
        <EmptyList />
      )}
    </SafeAreaView>
  );
}

export default DefaultListScreen;
