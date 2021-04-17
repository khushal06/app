import React from 'react';
import SideDrawer  from './CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import WelcomeScreen from "../screens/WelcomeScreen"


export const AppDrawerNavigator = createDrawerNavigator({


    WelcomeScreen : {
        screen : WelcomeScreen
    },



  },

  {
      contentComponent : SideDrawer
  },
  {
      initialRouteName : 'WelcomeScreen'
  }
  
  )