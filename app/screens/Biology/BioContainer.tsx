import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BioScreen from './BioScreen';
import { inject,observer } from 'mobx-react';

export interface Props {
  navigation:any;
  bio:any;
}

export interface State {
}
@inject("bio")
@observer
export default class BioContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
    this.props.bio.fetchBio()
  }
  _onGoBack=()=>{
    this.props.navigation.goBack();
  }
  public render() {
    const{bioData}=this.props.bio
    return (
      <BioScreen
      bioData={bioData}
      onBack={this._onGoBack}
      />
    );
  }
}
