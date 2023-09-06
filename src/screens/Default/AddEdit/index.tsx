import { useState } from 'react';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '../../../components/Menu';
import Header from '../../../components/Header';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  menuTitle: string;
  screenTitle: string;
  fields: JSX.Element;
}

function DefaultAddEditScreen({ menuTitle, screenTitle, fields }: Props) {
  // const { width, height } = Dimensions.get('window');
  // const theme: MyTheme = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <SafeAreaView>
      {showMenu && <Menu />}

      <Header screenTitle={screenTitle} setShowMenu={setShowMenu} />

      <Text style={styles.title}>{menuTitle}</Text>

      <View style={styles.fieldsContainer}>{fields}</View>
    </SafeAreaView>
  );
}

export default DefaultAddEditScreen;
