import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity
} from "react-native";
import FastImage from "react-native-fast-image";
import modules from "../../modules";
import AutoHeightImage from "react-native-auto-height-image";
import { BattambangBold, Battambang } from "../../../function/customFont";
import Icon from "react-native-vector-icons/Feather";
import _styles from "../../_styles";
import { _formatShortDate } from "../../services/format.service";
import { removeTag } from "../../services/formattext.service";



export interface Props {
  onClickNews: () => void;
  data?: any;
  imgUrl: any;
  title: string;
  date: string;
  subtitle?: any;
  editname?: any;
  onShare?: any;
  loading?: boolean;

}

export interface State {

}

export default ({ onClickNews, imgUrl, title, date, editname, onShare }: Props) => {
  return (
    <TouchableOpacity onPress={onClickNews} style={styles.Box}>

      <View style={styles.BlockText}>
        <Text numberOfLines={2} style={styles.titileText}>
          {title}
        </Text>
        {/* <View style={styles.BorderLine} /> */}

      </View>

      {imgUrl ? (
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.ImgCover}
          source={{ uri: imgUrl }}
        />
      ) : (
          <View>
            <FastImage
              resizeMode={FastImage.resizeMode.stretch}
              style={styles.ImgCover}
              source={require("../../images/logo1.png")}
            />
          </View>
        )}

      <View style={styles.BlockText}>

        <Text style={styles.editname} numberOfLines={3}>{removeTag(`${editname}`)}</Text>
        {/* <View style={styles.BorderLine} /> */}
        <View style={styles.rows1}>
          <View style={styles.rows}>
            <Icon style={styles.ContentText} name="clock" />
              <Text numberOfLines={2} style={styles.ContentText}>
                ថ្ងៃ{date ? _formatShortDate(date) : ""}
              </Text>
          </View>
          <View style={styles.rows2}>
            <TouchableOpacity onPress={onShare} >
              <Icon style={{ fontSize: modules.FONT_H2,paddingHorizontal:modules.BODY_HORIZONTAL_12 }} name="share-2" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");
const styles = StyleSheet.create({
  ImgCover: {
    width: WIDTH - modules.BODY_HORIZONTAL_12,
    height: HEIGHT / 4,
    borderRadius: modules.GRID_SPACING
  },
  Box: {
    margin: modules.SPACE5,
    borderColor: modules.COLOR_BORDER,
    borderWidth: 0.6,
    borderRadius: modules.GRID_SPACING,
    backgroundColor: modules.WHITE,
    marginTop: modules.SPACE5
  },
  titileText: {
    fontSize: modules.FONT_H4,
    fontWeight: "500",
    lineHeight: 33,
    color: modules.TITLE_HEADER,
    ...BattambangBold,
    marginHorizontal:modules.BODY_HORIZONTAL_12

  },
  editname: {
    fontSize: modules.FONT_H6,
    fontWeight: "500",
    lineHeight: 33,
    color: '#000',
    ...Battambang,
    marginHorizontal:modules.BODY_HORIZONTAL_12
  },
  ContentText: {
    lineHeight: 23,
    fontSize: modules.FONT_P,
    color: "#b1b4cc",
    paddingHorizontal: modules.SPACE,
    ...Battambang
  },
  BlockText: {
    paddingVertical: modules.PADDING
  },
  rows: {
    flexDirection: "row",
    // marginTop: modules.SPACE5,
    marginHorizontal:modules.BODY_HORIZONTAL_12

  },
  rows1: {
    flexDirection: "row",
    marginTop: modules.SPACE5,
    justifyContent: "space-between",
    alignItems:'center'
    
  },
  rows2: {
    flexDirection: "row",
    marginTop: modules.SPACE5
  },
  BorderLine: {
    width: WIDTH / 5,
    height: 3,
    backgroundColor: modules.BORDER_LINE,
    marginVertical: modules.SPACE5
  }
});
