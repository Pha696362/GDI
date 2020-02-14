import * as React from "react";
import { View, StyleSheet,Share, Text, Platform, StatusBar } from "react-native";

import { inject, observer } from "mobx-react";
import ListContentbyCategoryScreen from "./ListContentbyCategoryScreen";
interface Props {
  navigation: any;
  contentbycategory: any;
  youtube: any;
  speech: any;
  content:any
  onBack: any;
  onShare:any;
  
}

interface State {
  DuringMomentum: boolean;
  youtubeId: string;
  videoTitle: string;
  selectedDetail:any;
}
@inject("contentbycategory", "youtube", "speech",'content')
@observer
export default class HomeContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      DuringMomentum: false,
      youtubeId: "",
      videoTitle: "",
      selectedDetail:"",
    };
  }
  async componentDidMount() {
    StatusBar.setBarStyle("light-content");
    await this.props.contentbycategory.fetchContent();
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
    this.props.content.selectedContent(item);
    this.props.navigation.navigate("Detail");
    
  };
  _onGoBack = () => {
    this.props.navigation.goBack();
  };
  _onEnd = () => {
    Platform.OS == "ios"
      ? this.state.DuringMomentum == false
        ? (this.props.contentbycategory.fetchMoreContent(),
          // this.setState({ DuringMomentum: true }),
          console.log("okay"))
        : null
      : this.props.contentbycategory.fetchMoreContent();
  };

  _onRefresh = () => {
    this.setState({ DuringMomentum: false }, () => {
      this.props.contentbycategory.fetchContent();
    });
  };
  


  _onShare = async () => {
    // const { selectedDetail } = this.props.content
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
      selectCategory,
      loadingRefreshContent
    } = this.props.contentbycategory;
    const { youtubeDoc } = this.props.youtube;
    const { speechData } = this.props.speech;
    return (
      <ListContentbyCategoryScreen
        speechData={speechData}
        youtubeDoc={youtubeDoc}
        contentDoc={contentDoc}
        selectCategory={selectCategory}
        onBack={this._onGoBack}
        onClickDrawer={this._onDrawer}
        onClickNews={this._onClickNews}
        DuringMomentum={(value: any) =>
          this.setState({ DuringMomentum: value })
        }
        
        onEndReach={this._onEnd}
        onRefresh={this._onRefresh}
        loadingMore={loadingMore}
        loading={loadingContent}
        youtubeId={this.state.youtubeId}
        onPlayVideo={this._onPlayVideo}
        videoTitle={this.state.videoTitle}
        onShare={this._onShare}

    

      />
    );
  }
}
