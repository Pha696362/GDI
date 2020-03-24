import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import _styles from "../../_styles";
import Icon from "react-native-vector-icons/FontAwesome";
import modules from "../../modules";
import { BattambangBold } from "../../../function/customFont";
import FastImage from "react-native-fast-image";

export interface Props {
  openDrawer: any;
}

export interface State {}

export default ({ openDrawer }: Props) => {
  return (
    <View style={styles.header}>
      {/* <View style={styles.container}> */}
        <TouchableOpacity onPress={openDrawer}>
          <Icon style={styles.Icon} name="reorder" />
        </TouchableOpacity>
        <FastImage
          style={styles.TextLogo}
          source={require("../../images/logo1.png")}
        />
         <FastImage
          style={styles.Logo}
          source={require("../../images/logo.png")}
          resizeMode={FastImage.resizeMode.cover}
        />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    // paddingHorizontal: modules.BODY_HORIZONTAL_12,

    backgroundColor: modules.COLOR_MAIN,
    paddingVertical: modules.SPACE5,
    justifyContent:'space-between',
    alignItems:'center'
  },
  Icon: {
    fontSize: modules.FONT_H2,
    color: modules.WHITE,
    // paddingHorizontal:modules.BODY_HORIZONTAL_12
    marginHorizontal:12
  },
  container: {
    flexDirection: "row",
    alignContent:'center',
    justifyContent:'space-between'
  },
  TextLogo: {
    paddingHorizontal: modules.BODY_HORIZONTAL,
    width: modules.VIEW_PORT_WIDTH / 1.4,
    height:50
  },
   Logo: {
   marginHorizontal:12,
    width: 40,
    height:40
  }
});
