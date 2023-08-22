/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const theme = {
    ...DefaultTheme,

    myOwnProperty: true,

    colors: {
      ...DefaultTheme.colors,
      primary: '#219653',
      primaryText: '#FFFFFF',
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        {/* <SafeAreaView style={backgroundStyle}> */}
        <Stack.Navigator>
          {/* <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}> */}
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
          {/* <SignUp /> */}
          {/* </ScrollView> */}
        </Stack.Navigator>
        {/* </SafeAreaView> */}
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
