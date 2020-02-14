import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import modules from "../../modules";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { BattambangBold, Battambang } from "../../../function/customFont";

interface Props {
  IconName: any;
  category: any;
  onClickDrawer:any;
}

interface State {}

export default ({ IconName, category,onClickDrawer }: Props) => {
  return (
    <TouchableOpacity
    onPress={onClickDrawer}
      style={{ marginTop: modules.PADDING, paddingHorizontal: modules.PADDING }}
    >
      <View style={styles.Row}>
        <Icon style={styles.Icon} name={IconName} />
        <Text style={styles.textDrawer}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  textDrawer: {
    fontSize: modules.FONT_H6,
    paddingLeft:modules.PADDING,
    color:'#000',
    ...BattambangBold,
   
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: modules.BIG_SPACE,
    borderBottomWidth:0.3,
    borderColor:modules.SUB_TEXT
  },
  Icon: {
    fontSize: modules.FONT_H4,
    paddingRight:modules.PADDING,
    paddingBottom:modules.SPACE5,
    color:"#000"
  }
});
