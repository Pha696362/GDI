import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import SpeakScreen from "./SpeakScreen";
import { inject, observer } from "mobx-react";

export interface Props {
  navigation: any;
  speech: any;
}

export interface State {}
@inject("speech")
@observer
export default class SpeakContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.speech.fetchSpeech();
  }
  _onClick = () => {
    this.props.navigation.goBack();
  };
  public render() {
    const { speechData, loading } = this.props.speech
    return (
      <SpeakScreen
        speechData={speechData}
        loading={loading}
        onBack={this._onClick}
      />
    );
  }
}
