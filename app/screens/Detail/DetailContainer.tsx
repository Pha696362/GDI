import * as React from "react";
import { View, StyleSheet, Text, StatusBar, Share, Alert, } from "react-native";
import DetailScreen from "./DetailScreen";
import { inject, observer } from "mobx-react";
export interface Props {
  navigation: any;
  content: any;

}

export interface State {
  key: string,
  selectedItem:any
}

@inject("content")
@observer
export default class DetailContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      key: '',
      selectedItem: null,
    };
  }
 async componentDidMount() {
    StatusBar.setBarStyle("light-content");
    const { dataSelected } = await this.props.content;
    this.props.content.fetchLink()

  }
  _onGoBack = () => {
    this.props.navigation.goBack();
  };
  _onShare = async () => {
    const { dataSelected } = this.props.content
    const shareLink = this.props.content.link

    try {
      const result = await Share.share({
        message: `${shareLink[0].link}/${dataSelected.key}`

      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log("object", error);
    }
  };
   render() {
    const { dataSelected } = this.props.content

    return  <DetailScreen 
    dataSelected={dataSelected}
     onBack={this._onGoBack} 
     onShare={this._onShare}
     />
    ;
  }
}
