import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import modules from "../../modules";
import { Battambang } from "../../../function/customFont";
import FastImage from "react-native-fast-image";
import { ScrollView } from "react-native-gesture-handler";

export interface Props {
  uri: string;
  VideoTitle: String;
  onPlay: any;
  Channel: String;
}

export interface State {}

export default ({ uri, VideoTitle, onPlay, Channel }: Props) => {
  return (
    <TouchableOpacity style={styles.SubVideoBox} onPress={onPlay}>
      <View style={styles.cardVideo}>
        <FastImage style={styles.subImgVideo} source={{ uri: uri }} />

        <View style={styles.VideoSubTitle}>
          <Text
            numberOfLines={3}
            style={{ color: modules.COLOR_MAIN, lineHeight: 25 }}
          >
            {VideoTitle}
          </Text>
          <Text style={styles.text}>{Channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  SubVideoBox: {
    height: 110,
    marginBottom: modules.BODY_HORIZONTAL_12,
    borderBottomColor:modules.BLUE,
    borderBottomWidth:0.3,
    marginHorizontal:modules.PADDING
  },
  cardVideo: {
    width: "100%",
    flexDirection: "row",
    height: 100
  },
  subImgVideo: {
    width: 180,
    height: 100
  },
  VideoSubTitle: {
    flex: 1,
    paddingLeft: modules.BODY_HORIZONTAL_18
  },
  text: {
    color: modules.PRIMARY,
    fontSize: 10
  }
});
