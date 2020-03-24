

import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  Alert,
  Share
} from "react-native";
import HomeScreen from "./HomeScreen";
import { inject, observer } from "mobx-react";
import HomeScreenAndroid from "./HomeScreenAndroid";
interface Props {
  navigation: any;
  content: any;
  youtube: any;
  speech: any;
}

interface State {
  DuringMomentum: boolean;
  youtubeId: string;
  videoTitle: string;
  playVideo: boolean;
}
@inject("content", "youtube", "speech")
@observer
export default class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      DuringMomentum: false,
      youtubeId: "",
      videoTitle: "",
      playVideo: false
    };
  }
  async componentDidMount() {
    StatusBar.setBarStyle("light-content");
    await this.props.content.fetchContent();
    this.props.youtube.fetchYoutube();
    this.props.speech.fetchSpeech();
    this.props.content.fetchLink()
    const { youtubeDoc } = this.props.youtube;
   
  }
  _onPlayVideo = (youtubeId: any, videoTitle: string) => {
    this.setState({ playVideo: true });
    this.setState({ youtubeId: youtubeId, videoTitle: videoTitle });
  };
  _onPlayAndroid = (VideoID: any) => {
    this.props.youtube.SelectVideo(VideoID);
    this.props.navigation.navigate("YoutubePlay");
  };
  _onDrawer = () => {
    this.props.navigation.openDrawer();
  };
  _onClickNews = (item: any) => {
    this.props.navigation.navigate("Detail");
    this.props.content.selectedContent(item);
  };
  _onEnd = () => {
    Platform.OS == "ios"
      ? this.state.DuringMomentum == false
        ? (this.props.content.fetchMoreContent(),
          // this.setState({ DuringMomentum: true }),
          console.log("okay"))
        : null
      : this.props.content.fetchMoreContent();
  };

  _onRefresh = () => {
    this.setState({ DuringMomentum: false }, () => {
      
      this.props.content.fetchContent();
    });
  };
  _onShare = (key:string) => {

    const shareLink = this.props.content.link
    
    
    try {
      const result = Share.share({
        message: `${shareLink[0].link}/${key}`
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
  public render() {
    const {
      contentDoc,
      loadingMore,
      loadingContent,
      loadingRefreshContent
    } = this.props.content;
    const { youtubeDoc } = this.props.youtube;
    const { speechData } = this.props.speech;

    if (Platform.OS === "android") {
      return (
        <HomeScreenAndroid
          onShare={this._onShare}
          speechData={speechData}
          youtubeDoc={youtubeDoc}
          contentDoc={contentDoc}
          onClickDrawer={this._onDrawer}
          onClickNews={this._onClickNews}
          DuringMomentum={(value: any) =>
            this.setState({ DuringMomentum: value })
          }
          // refresh={loadingRefreshContent}
          onEndReach={this._onEnd}
          onRefresh={this._onRefresh}
          loadingMore={loadingMore}
          loading={loadingContent}
          youtubeId={this.state.youtubeId}
          onPlayAndroid={this._onPlayAndroid}
          videoTitle={this.state.videoTitle}
          playVideo={this.state.playVideo}
        />
      );
    } else {
      return (
        <HomeScreen
         onShare={this._onShare}
          speechData={speechData}
          youtubeDoc={youtubeDoc}
          contentDoc={contentDoc}
          onClickDrawer={this._onDrawer}
          onClickNews={this._onClickNews}
          DuringMomentum={(value: any) =>
            this.setState({ DuringMomentum: value })
          }
          // refresh={loadingRefreshContent}
          onEndReach={this._onEnd}
          onRefresh={this._onRefresh}
          loadingMore={loadingMore}
          loading={loadingContent}
          youtubeId={this.state.youtubeId}
          onPlayVideo={this._onPlayVideo}
          videoTitle={this.state.videoTitle}
          playVideo={this.state.playVideo}
        />
      );
    }
  }
}
