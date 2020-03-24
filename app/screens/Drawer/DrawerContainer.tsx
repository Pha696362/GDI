import * as React from "react";
import { View, StyleSheet, Text, Linking, Platform } from "react-native";
import DrawerScreen from "./DrawerScreen";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { inject, observer } from "mobx-react";
import { keys } from "mobx";
export interface Props extends NavigationDrawerScreenProps {
  contentbycategory: any;
}

export interface State { }
@inject("contentbycategory")
@observer
export default class DrawerContainer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  _onClickDrawer = (item: any, ) => {

    if (item.key == '1') {
      this.props.navigation.navigate(item.route);
      this.props.navigation.closeDrawer();

    } else if (item.key=='2') {
      this.props.navigation.navigate('Contact')
      this.props.navigation.closeDrawer();
    }
    else if(item.key=='3'){
    
        if(Platform.OS === 'ios'){
          Linking.canOpenURL('app-settings:/Notifications').then(supported => {
    
            console.log(`Settings url works`)
            Linking.openURL('app-settings:')
        }).catch(error => {
            console.log(`An error has occured: ${error}`)
        })
        } else {
          Linking.openSettings()
        }
       
      
    }
  

    else {
      this.props.contentbycategory.fetchContent(item.key,item.name);
      // this.props.contentbycategory.fetchCategory(item.name)
      this.props.navigation.navigate('ContentbyCategory')
      this.props.navigation.closeDrawer();
    }
    
   
      



  }
  public render() {
    return <DrawerScreen onClick={this._onClickDrawer} />;
  }
}


