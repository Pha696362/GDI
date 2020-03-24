import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import modules from "../../modules";
import Icon from "react-native-vector-icons/Feather";
import SafeAreaView from "react-native-safe-area-view";
import _styles from "../../_styles";
import YouTube from "react-native-youtube";
import { BattambangBold, Battambang } from "../../../function/customFont";
import { ScrollView } from "react-native-gesture-handler";
import HeaderContainer from "../components/HeaderContainer";
import VideoCard from "../components/VideoCard";
interface Props {
  onGoBack: any;
  youtubeDoc: any;
  youtubeId: string;
  onPlayVideo: any;
  videoTitle: string;
  openLink: any;
  onPress?: (item: any) => void
}

export default ({
  youtubeDoc,
  youtubeId,
  onPlayVideo,
  videoTitle,
  onGoBack,
  openLink,
  onPress
}: Props) => {
  return (
    <View style={[_styles.flx1, { backgroundColor: modules.WHITE }]}>
      <HeaderContainer onBack={onGoBack}  HeaderTitle="Youtube" />
      <YouTube
        videoId={youtubeId}
        play={true}
        controls={2}
        apiKey={"AIzaSyBXZ2Lis8S_OeC18JsIFuo4WoIejkCYW9M"}
        fullscreen={true}
        loop
        style={{
          alignSelf: "stretch",
          height: modules.VIEW_PORT_HEIGHT / 3.85
        }}
        modestbranding={false}
      />

      <View style={_styles.flx1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.VTitle}>
            <Text numberOfLines={2} style={styles.text}>
              {videoTitle}
            </Text>
          </View>
          <View style={styles.border}></View>
          <View style={styles.VTitle}>
            <Text style={[styles.textMore, { ...BattambangBold }]}>
              វីដេអូផ្សេងទៀត៖
            </Text>
          </View>
          {!youtubeDoc
            ? null
            : youtubeDoc.map((i: any, index: any) => {
                return (
                  <VideoCard
                    key={index}
                    onPlay={() => onPlayVideo(i.id.videoId, i.snippet.title)}
                    uri={i.snippet.thumbnails.high.url}
                    VideoTitle={i.snippet.title}
                    Channel={i.snippet.channelTitle}
                  />
                );
              })}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ImageBox: {
    width: "100%",
    height: 300
  },
  Header: {
    position: "absolute",
    zIndex: Platform.OS === "ios" ? 50 : 0,
    top: Platform.OS === "ios" ? 62 : 20,
    paddingHorizontal: modules.PADDING
  },
  iconTabContainer: {
    fontSize: modules.FONT_H4,
    color: modules.COLOR_MAIN,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 30
  },
  VTitle: {
    paddingHorizontal: modules.PADDING,
    marginVertical: modules.GRID_SPACING + 4
  },
  ButtonTab: {
    paddingHorizontal: modules.PADDING + 5,
    marginVertical: modules.GRID_SPACING,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: modules.COLOR_MAIN,
    fontSize: modules.FONT_H5,
    ...Battambang
  },
  textMore: {
    color: modules.COLOR_MAIN,
    fontSize: modules.FONT_P
  },
  border: {
    borderBottomColor: modules.COLOR_MAIN,
    borderBottomWidth: 0.3
  }
});
