import * as React from "react";
import { View, StyleSheet, Share, Platform, StatusBar } from "react-native";
import HomeScreen from "./HomeScreen";
import { inject, observer } from "mobx-react";
interface Props {
  navigation: any;
  content: any;
  youtube: any;
  speech: any;
  onShare:any,
  
}

interface State {
  DuringMomentum: boolean;
  youtubeId: string;
  videoTitle: string;
  selectedItem: any
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
      selectedItem: null,
    };
  }
  async componentDidMount() {
    StatusBar.setBarStyle("light-content");
    await this.props.content.fetchContent();
    this.props.youtube.fetchYoutube();
    this.props.speech.fetchSpeech();
  }
  _onPlayVideo = (youtubeId: any, videoTitle: string) => {
    this.setState({ youtubeId: youtubeId, videoTitle: videoTitle });
    this.props.navigation.navigate("Youtube", { youtubeId, videoTitle });
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
  _onModal = (item: any) => {
    // console.log("item",item)

    this.setState({ selectedItem: item })

  }
  _onShare = async () => {
    const { selectedDetail } = this.props.content
    try {
      const result = await Share.share({
        message: `https://bakseynews.com/article/`

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
    return (
      <HomeScreen
        speechData={speechData}
        youtubeDoc={youtubeDoc}
        contentDoc={contentDoc}
        onClickDrawer={this._onDrawer}
        onClickNews={this._onClickNews}
        onModal={this._onModal}
        onShare={this._onShare}
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
       
       
      />
    );
  }
}
