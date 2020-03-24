
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

import { inject, observer } from "mobx-react";

import ListContentbyCategoryScreenAndroid from "./ListContentbyCategoryScreenAndroid";
import ListContentbyCategoryScreen from "./ListContentbyCategoryScreen";
interface Props {
  navigation: any;
  content: any;
  youtube: any;
  speech: any;
  contentbycategory:any;

}

interface State {
  DuringMomentum: boolean;
  youtubeId: string;
  videoTitle: string;
  selectedItem: any;
  key:string;
  playVideo: boolean;

}
@inject( "youtube", "content","speech","contentbycategory")
@observer
export default class ListContentbyCategoryContianer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      DuringMomentum: false,
      youtubeId: "",
      videoTitle: "",
      playVideo: false,
      selectedItem:null,
      key:'',
    };
  }
  async componentDidMount() {
    StatusBar.setBarStyle("light-content");
    const { dataSelected } = await this.props.content;
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
  _onGoBack = () => {
    this.props.navigation.goBack();
  };
  _onClickNews = (item: any) => {
    this.props.content.selectedContent(item);

    this.props.navigation.navigate("Detail");
    
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
      this.props.contentbycategory.fetchCategory();
    });
  };

    _onShare = async (key:string) => {
    
      const shareLink = this.props.content.link
    try {
      const result = await Share.share({
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
      selectCategory,
      categoryTitle,
      loadingMore,
      loadingContent,
      loadingRefreshContent,
      contentDoc
    } = this.props.contentbycategory;
    const { youtubeDoc } = this.props.youtube;
    const { speechData } = this.props.speech;


    

    if (Platform.OS === "android") { 
      return (
        <ListContentbyCategoryScreenAndroid
          onShare={this._onShare}
          categoryTitle={categoryTitle}
          speechData={speechData}
          youtubeDoc={youtubeDoc}
          contentDoc={contentDoc}
          selectCategory={selectCategory}
          onBack={this._onGoBack}
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
        <ListContentbyCategoryScreen
        contentDoc={contentDoc}
          onShare={this._onShare}
          speechData={speechData}
          categoryTitle={categoryTitle}
          youtubeDoc={youtubeDoc}
          onBack={this._onGoBack}         
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


