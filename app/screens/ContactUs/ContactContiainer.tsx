import * as React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import ContactScreen from './ContactScreen';
import { inject, observer } from "mobx-react";
export interface Props {
  navigation:any;
  contact:any;

  ContactSelect: any
  onBack: any;

}

export interface State {
}

@inject('contact')
@observer
export default class ContactContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
async  componentDidMount(){
    await this.props.contact.fetchContact()

  }
  _onGoBack=()=>{
    this.props.navigation.goBack();
  }
  _onClick=()=>{
    Linking.openURL("https://www.facebook.com/GDIOfficial/")
  }
  public render() {
    const { contact } = this.props.contact

    return (
      <ContactScreen
      ContactSelect={contact}
      onBack={this._onGoBack}
      onfb={this._onClick}
      />
    );
  }
}
