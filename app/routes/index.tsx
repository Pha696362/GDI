import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import DrawerContainer from "../screens/Drawer/DrawerContainer";
import DetailContainer from "../screens/Detail/DetailContainer"
import {Dimensions}from 'react-native'
import SettingContainer from "../screens/Setting/SettingContainer";
import SpeakContainer from "../screens/Speak/SpeakContainer";
import BioContainer from "../screens/Biology/BioContainer";
import AwardContianer from "../screens/award/awardContainer";
import YoutubeContainer from "../screens/youtube/YoutubeContainer";
import WelcomrScreen from "../screens/WellcomeScreen/welcome";
import ListContentbyCategoryContianer from "../screens/DailyAction/ListContentbyCategoryContianer";
import ContactContainer from "../screens/ContactUs/ContactContiainer";
import HomeContainer from "../screens/Home/HomeContaine";


const {height:HEIGHT, width:WIDTH } =Dimensions.get("window")

const MainTab = createStackNavigator({
    Home: HomeContainer,
    Detail: DetailContainer,
    Setting: SettingContainer,
    Speak:SpeakContainer,
    Bio:BioContainer,
    Contact:ContactContainer,
    Youtube:YoutubeContainer,
    YoutubePlay:YoutubeContainer,
    ContentbyCategory:ListContentbyCategoryContianer
    
  }, {
    headerMode: "none"
  })
  
  const MainStack = createDrawerNavigator({
    Info: { screen: MainTab }
  }, 
  {
    initialRouteName: 'Info',
    contentComponent: DrawerContainer,
    drawerWidth: WIDTH/1.2,
    drawerType: 'slide'
  });
  
  const MainApp = createSwitchNavigator({
    Welcome:WelcomrScreen,
    AppTab: MainStack,
    


  }, {
    headerMode: "none"
  })
  
  export default createAppContainer(MainApp);
  
  
