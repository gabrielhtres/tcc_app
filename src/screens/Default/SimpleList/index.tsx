import { useState } from 'react';
import { Text, useTheme } from 'react-native-paper';
import Menu from '../../../components/Menu';
import styles from './styles';
import Header from '../../../components/Header';
import ListItem from './ListItem';
import EmptyList from '../../../components/EmptyList';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';
import { MyTheme } from '../../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderTitle } from '../../../store/slices/headerSlice';

interface Props {
  list: any[];
  viewScreen: string;
  navigation: any;
  parentName: 'analysis' | 'plot' | 'phase' | 'disease';
}

function DefaultSimpleListScreen({ list, viewScreen, navigation }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const theme: MyTheme = useTheme();
  const dispatch = useDispatch();
  const screenTitle = useSelector((state: any) => state.tab.title);
  const menuTitle = useSelector((state: any) => state.header.title);

  const handleView = (id: number, name: string) => {
    dispatch(setHeaderTitle(`Visualizar ${name}`));
    navigation.navigate(viewScreen, { viewId: id });
  };

  const handleViewMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <GestureHandlerRootView
        style={{ backgroundColor: theme.colors.background }}>
        {showMenu && <Menu handleViewMenu={handleViewMenu} />}

        <Header screenTitle={screenTitle} setShowMenu={setShowMenu} />

        <Text
          style={{ ...styles.title, backgroundColor: theme.colors.background }}>
          {menuTitle}
        </Text>

        <ScrollView
          style={{
            ...styles.scrollContainer,
            backgroundColor: theme.colors.background,
          }}>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem
                id={item.id}
                title={item.name}
                key={item.id}
                handleView={handleView}
              />
            ))
          ) : (
            <EmptyList />
          )}
        </ScrollView>
      </GestureHandlerRootView>
    </>
  );
}

export default DefaultSimpleListScreen;
