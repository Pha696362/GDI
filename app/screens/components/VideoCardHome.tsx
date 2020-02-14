import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import modules from "../../modules";
import { Battambang } from "../../../function/customFont";
import FastImage from "react-native-fast-image";
import { ScrollView } from "react-native-gesture-handler";

export interface Props {
  uri: string;
  VideoTitle: any;
  onPlay: any;
}

export interface State {}

export default ({ uri, onPlay, VideoTitle }: Props) => {
  return (
    <TouchableOpacity onPress={onPlay}>
      <View style={styles.videoCard}>
        <FastImage style={styles.subImgVideo} source={{ uri: uri }} />
        <View style={styles.title}>
          <Text numberOfLines={2} style={styles.text}>
            {VideoTitle}
          </Text>
        </View>t
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subImgVideo: {
    width: "100%",
    height: "100%"
  },
  videoCard: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 4,
    marginRight: modules.SPACE
  },
  title: {
    position: "absolute",
    width: "100%",
    padding: modules.SPACE5,
    backgroundColor: "rgba(0,0,0,0.5)",
    top: 1
  },
  text: {
    color: modules.WHITE,
    lineHeight: 22,
    fontSize: 16,
    ...Battambang,
    paddingTop: modules.SPACE
  },
  play: {
    width: 40,
    height: 40
  },
  playbottom: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
    justifyContent: "center"
  }
});
