import * as React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import DrawerScreen from "./DrawerScreen";
import { NavigationDrawerScreenProps } from "react-navigation-drawer";
import { inject, observer } from "mobx-react";
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
      this.props.navigation.closeDrawer();

    }
    else {
      this.props.contentbycategory.fetchContent(item.key);
      this.props.contentbycategory.fetchCategory(item.name)
      this.props.navigation.navigate('ContentbyCategory')
      this.props.navigation.closeDrawer();
    }

  }
  public render() {
    return <DrawerScreen onClick={this._onClickDrawer} />;
  }
}


