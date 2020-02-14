import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ContactScreen from './SettingScreen';
import SettingScreen from './SettingScreen';

export interface Props {
  navigation:any;
}

export interface State {
}

export default class SettingContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  _onGoBack=()=>{
    this.props.navigation.goBack();
  }
  public render() {
    return (
      <SettingScreen
      onBack={this._onGoBack}/>
    );
  }
}
