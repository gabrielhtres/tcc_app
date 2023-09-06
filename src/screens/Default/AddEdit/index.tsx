import { useState } from 'react';
import { Text, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import { View } from 'react-native';
import styles from './styles';
import { MyTheme } from '../../../../App';

interface Props {
  menuTitle: string;
  screenTitle: string;
  fields: JSX.Element;
}

function DefaultAddEditScreen({ menuTitle, screenTitle, fields }: Props) {
  // const { width, height } = Dimensions.get('window');
  const theme: MyTheme = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      {showMenu && <Menu />}

      <Header screenTitle={screenTitle} setShowMenu={setShowMenu} />

      <Text style={styles.title}>{menuTitle}</Text>

      <View style={styles.fieldsContainer}>{fields}</View>
    </SafeAreaView>
  );
}

export default DefaultAddEditScreen;
