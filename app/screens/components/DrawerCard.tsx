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
      style={styles.Row}
    >
     <Icon style={styles.Icon} name={IconName} />
        <Text style={styles.textDrawer}>{category}</Text>
     
    </TouchableOpacity>
  );
}; 

const styles = StyleSheet.create({
  textDrawer: {
    fontSize: modules.FONT_H4,
    paddingLeft:modules.PADDING,
    color:'#000',
    ...BattambangBold,
   
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth:1,
    borderColor:'#ddd',
    padding: modules.PADDING 
    
  },
  Icon: {
    fontSize: modules.FONT_H2,
    paddingRight:modules.PADDING,
    paddingBottom:modules.SPACE5,
    color:modules.SUB_TEXT,
    

  }
});
