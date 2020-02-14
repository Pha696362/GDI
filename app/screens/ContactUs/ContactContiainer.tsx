import * as React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import ContactScreen from './ContactScreen';

export interface Props {
  navigation:any;
}

export interface State {
}

export default class ContactContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  _onGoBack=()=>{
    this.props.navigation.goBack();
  }
  _onClick=()=>{
    Linking.openURL("http://sarkheng.com/")
  }
  public render() {
    return (
      <ContactScreen
      onBack={this._onGoBack}
      onWebside={this._onClick}
      />
    );
  }
}
