import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Linking
} from "react-native";
import YoutubeScreen from "./YoutubeScreen";
import { NavigationStackScreenProps } from "react-navigation-stack";
import { inject, observer } from "mobx-react";
import modules from "../../modules";
import SafeAreaView from "react-native-safe-area-view";
import LottieView from "lottie-react-native";
interface Props extends NavigationStackScreenProps {
  youtube: any;
}

interface State {
  youtubeId: string;
  videoTitle: string;
}
@inject("youtube")
@observer
export default class YoutubeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      youtubeId: "",
      videoTitle: ""
    };
  }
  async componentDidMount() {
    await this.props.youtube.fetchYoutube();
    const youtubeId = this.props.navigation.getParam("youtubeId");
    const videoTitle = this.props.navigation.getParam("videoTitle");
    const { youtubeDoc } = this.props.youtube;
    if (youtubeId) {
      this.setState({ youtubeId, videoTitle });
    } else {
      this.setState({ youtubeId: youtubeDoc[0].id.videoId });
      this.setState({ videoTitle: youtubeDoc[0].snippet.title });
    }
  }
  _onGoBack = () => {
    this.props.navigation.goBack();
  };
  _onPlayVideo = (youtubeId: any, videoTitle: string) => {
    this.setState({ youtubeId: youtubeId, videoTitle: videoTitle });
  };
  _onLink = () => {
    Linking.openURL("https://www.youtube./user/");
  };
  render() {
    const { youtubeDoc, loading } = this.props.youtube;
    if (loading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <SafeAreaView />
          {/* <LottieView source={require("../../Image/data.json")} autoPlay loop /> */}
        </View>
      );
    } else {
      return (
        <YoutubeScreen
          onGoBack={this._onGoBack}
          youtubeDoc={youtubeDoc}
          youtubeId={this.state.youtubeId}
          onPlayVideo={this._onPlayVideo}
          videoTitle={this.state.videoTitle}
          openLink={this._onLink}
        />
      );
    }
  }
}
