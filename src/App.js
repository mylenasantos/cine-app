import React from 'react';
import { View } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import { createAppContainer } from 'react-navigation';
import { Main } from './pages';

const App = createDrawerNavigator (
  {
    Home: Main,
  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor: "#fbe9e7",
    contentOptions: {
      activeTintColor: '#da552f',
      labelStyle: {
        fontSize: 16,
      }
    }
  }
)

export default createAppContainer(App);


