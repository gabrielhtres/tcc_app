/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {
  MD3LightTheme as DefaultTheme,
  MD3Theme,
  PaperProvider,
} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ListAnalysis from './src/screens/Analysis/List';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';
import AddEditAnalysis from './src/screens/Analysis/AddEdit';
import ListPlot from './src/screens/Plot/List';
import AddEditPlot from './src/screens/Plot/AddEdit';
import { Provider } from 'react-redux';
import store from './src/store';

interface MyColors extends MD3Colors {
  primaryText: string;
  errorColor: string;
}

export interface MyTheme extends MD3Theme {
  colors: MyColors;
}

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  //   flex: 1,
  // };

  const theme: MyTheme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      primary: '#219653',
      secondary: '#27AE60',
      tertiary: '#6FCF97',
      primaryText: '#FFFFFF',
      errorColor: '#B3271C',
      background: '#FFF',
      backdrop: '#FFF',
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName="ListAnalysis">
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false, freezeOnBlur: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false, freezeOnBlur: false }}
            />
            <Stack.Screen
              name="ListAnalysis"
              component={ListAnalysis}
              options={{ headerShown: false, freezeOnBlur: false }}
            />
            <Stack.Screen
              name="AddEditAnalysis"
              component={AddEditAnalysis}
              options={{ headerShown: false, freezeOnBlur: false }}
            />
            <Stack.Screen
              name="ListPlot"
              component={ListPlot}
              options={{ headerShown: false, freezeOnBlur: false }}
            />
            <Stack.Screen
              name="AddEditPlot"
              component={AddEditPlot}
              options={{ headerShown: false, freezeOnBlur: false }}
            />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
