import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Dimensions, View, TouchableHighlight } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import styles from './styles';
import { MyTheme } from '../../../../App';

interface Props {
  icon: IconDefinition;
  label: string;
  route: string;
}

function MenuItem({ icon, label, route }: Props) {
  const theme: MyTheme = useTheme();
  const { fontScale } = Dimensions.get('window');

  const handleLogout = () => {
    // navigation.navigate('SignIn');
  };

  return (
    <TouchableHighlight
      onPress={() => {
        if (route === '/logout') {
          handleLogout();
          return;
        }
      }}
      underlayColor={theme.colors.tertiary}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.container,
          backgroundColor: false ? theme.colors.tertiary : 'initial',
        }}>
        <FontAwesomeIcon
          icon={icon}
          style={styles.icon}
          color="#FFF"
          size={fontScale * 20}
        />
        <Text
          style={{
            ...styles.text,
            color: theme.colors.primaryText,
          }}>
          {label}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default MenuItem;
