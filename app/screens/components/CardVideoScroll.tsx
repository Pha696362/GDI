import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import YouTube from "react-native-youtube";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome5";
import modules from "../../modules";

interface Props {
  uri: any;
  title: any;
  youtubeId: any;
}
interface State {}

export default ({ uri, title, youtubeId }: Props) => {
  const [PlayVideo, setPlayVideo] = React.useState();
  const [Progress, setProgress] = React.useState();
  return (
    <View style={styles.group}>
      <View>
        <View style={styles.play}>
          <TouchableOpacity
            style={styles.cover}
            onPress={() => {
              setPlayVideo(youtubeId), setProgress(youtubeId);
            }}
          >
            <FastImage style={styles.img} source={{ uri: uri }}>
              {Progress === "KVZ-P-ZI6W4" ? (
                <ActivityIndicator size="small" />
              ) : (
                <Icon style={styles.icon} name="youtube" />
              )}
            </FastImage>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.video}>
        <YouTube
          onChangeFullscreen={() => setProgress(null)}
        //   fullscreen={true}
        controls={2}
          play={true}
          videoId={PlayVideo}
          style={{ alignSelf: "stretch", height: 120 }}
        />
      </View>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    backgroundColor: modules.WHITE
  },
  play: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 3.5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    height: "100%",
    width: modules.VIEW_PORT_WIDTH,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  cover: {
    overflow: "hidden"
  },
  video: {
    display: "none"
  },
  icon: {
    color: "red",
    fontSize: modules.FONT_H3 * 2
  },
  title: {
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
    position:"absolute",
    zIndex:0,
    top:10,
    paddingRight:12,
    backgroundColor:'rgba(230, 125, 34,0.8)'
  }
});
