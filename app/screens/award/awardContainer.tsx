import * as React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import DailyActionScreen from "../DailyAction/ListContentbyCategoryScreen";
import { inject, observer } from "mobx-react";
import AwardScreen from "./AwardScreen";
interface Props {
  navigation: any;
  content: any;
  award: any;
}

interface State {
  DuringMomentum: boolean;
}
@inject("award", "content")
@observer
export default class AwardContianer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      DuringMomentum: false
    };
  }
  componentDidMount() {
    this.props.award.fetchAward();
  }
  _onGoBack = () => {
    this.props.navigation.goBack();
  };
  _onClickNews = (item: any) => {
    this.props.navigation.navigate("Detail");
    this.props.content.selectedContent(item);
  };
  _onEnd = () => {
    Platform.OS == "ios"
      ? this.state.DuringMomentum == false
        ? (this.props.award.fetchMoreAward(),
         
          console.log("okay"))
        : null
      : this.props.award.fetchMoreAward();
  };

  _onRefresh = () => {
    this.setState({ DuringMomentum: false }, () => {
      this.props.award.fetchAward();
    });
  };
  public render() {
    const {
      dataAward,
      loadingMore,
      loadingContent,
      loadingRefreshContent
    } = this.props.award;
    return (
      <AwardScreen
        dataAward={dataAward}
        onBack={this._onGoBack}
        onClickNews={this._onClickNews}
        DuringMomentum={(value: any) =>
          this.setState({ DuringMomentum: value })
        }
        refresh={loadingRefreshContent}
        onEndReach={this._onEnd}
        onRefresh={this._onRefresh}
        loadingMore={loadingMore}
        loading={loadingContent}
      />
    );
  }
}
