import { useState } from 'react';
import { Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import { View } from 'react-native';
import styles from './styles';
import { MyTheme } from '../../../../App';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

interface Props {
  fields: JSX.Element;
}

function DefaultDetailScreen({ fields }: Props) {
  // const { width, height } = Dimensions.get('window');
  const theme: MyTheme = useTheme();
  const menuTitle = useSelector((state: any) => state.header.title);
  const screenTitle = useSelector((state: any) => state.tab.title);
  const showMenu = useSelector((state: any) => state.menu.show);

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      {showMenu && <Menu />}

      <Header screenTitle={screenTitle} />

      <Text style={styles.title}>{menuTitle}</Text>

      <View style={styles.fieldsContainer}>{fields}</View>
    </SafeAreaView>
  );
}

export default DefaultDetailScreen;
