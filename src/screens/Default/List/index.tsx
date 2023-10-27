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
import DefaultFloatButton from '../../../components/DefaultFloatButton';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../utils/api';
import { setParent } from '../../../store/slices/parentSlice';
import { setHeaderTitle } from '../../../store/slices/headerSlice';

interface Props {
  list: any[];
  addEditScreen: string;
  listScreen: string;
  childrenListScreen: string;
  apiRoute: string;
  navigation: any;
  parentName: 'analysis' | 'plot' | 'phase' | 'disease';
  removeFunction: () => void;
  simpleList?: boolean;
  fungicideList?: boolean;
}

function DefaultListScreen({
  list,
  addEditScreen,
  childrenListScreen,
  apiRoute,
  navigation,
  parentName,
  removeFunction,
}: Props) {
  const [showMenu, setShowMenu] = useState(false);

  const theme: MyTheme = useTheme();
  const dispatch = useDispatch();
  const screenTitle = useSelector((state: any) => state.tab.title);
  const menuTitle = useSelector((state: any) => state.header.title);
  const parents = useSelector((state: any) => state.parent.parents);

  const handleEdit = (id: number, name: string) => {
    dispatch(setHeaderTitle(`Editar ${name}`));
    navigation.navigate(addEditScreen, { editId: id, isView: false });
  };

  const handleView = (id: number, name: string) => {
    dispatch(setHeaderTitle(`Visualizar ${name}`));
    navigation.navigate(addEditScreen, { editId: id, isView: true });
  };

  const handleRemove = async (id: number) => {
    await api.delete(`${apiRoute}/${id}`);
    removeFunction();
  };

  const handleList = (id: number, name: string) => {
    // console.log('handle List', id, name);

    dispatch(
      setParent({
        ...parents,
        [parentName]: {
          id,
          name,
        },
      }),
    );
    navigation.navigate(childrenListScreen);
  };

  const handleViewMenu = () => {
    setShowMenu(!showMenu);
  };

  // const handleAdd = (id: number) => {
  //   navigation.navigate(addEditScreen, { isView: false, parentId: id });
  // }

  return (
    <>
      <GestureHandlerRootView
        style={{ backgroundColor: theme.colors.background }}>
        {showMenu && (
          <Menu handleViewMenu={handleViewMenu} navigation={navigation} />
        )}

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
                statusId={item.statusId}
                defaultId={item.defaultId}
                key={item.id}
                handleEdit={handleEdit}
                handleView={handleView}
                handleRemove={handleRemove}
                handleList={handleList}
              />
            ))
          ) : (
            <EmptyList />
          )}
        </ScrollView>
      </GestureHandlerRootView>
      <DefaultFloatButton
        onPress={() => {
          navigation.navigate(addEditScreen, { isView: false });
        }}
        type="add"
      />
    </>
  );
}

export default DefaultListScreen;
