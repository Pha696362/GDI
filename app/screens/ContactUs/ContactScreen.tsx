import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import HeaderContainer from "../components/HeaderContainer";
import FastImage from "react-native-fast-image";
import modules from "../../modules";

import _styles from "../../_styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Battambang } from "../../../function/customFont";
export interface Props {
  onBack: any;
  HeaderTitle?: any;
  onWebside: any;
}

export interface State {}

export default ({ onBack, onWebside }: Props) => {
  return (
    <View style={_styles.flx1}>
      <HeaderContainer HeaderTitle="ទំនាក់ទំនង" onGoBack={onBack} />
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text1}>ឈ្មោះ</Text>
          <Text style={styles.text}>SAR KHENG</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>E-Mail</Text>
          <Text style={styles.text}>sarkheng.com@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text1}>វេបសាយ</Text>
          <TouchableOpacity onPress={onWebside}>
            <Text style={styles.text}>www.sarkheng.com</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card}>
      <Text style={styles.text1}>
        ទំនាក់ទំនងក្រុមការងារតាមយៈ 
      </Text>
      <Text style={styles.text}>
      អាស័យដ្ឋាន: #275 ផ្លូវព្រះនរោត្តម,
        ក្រុងភ្នំពេញ
      </Text>
      </View>
      
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: modules.BACKGROUND_PRIMARY,
    margin: modules.BODY_HORIZONTAL_12,
    padding: modules.BODY_HORIZONTAL_18,
    borderRadius: modules.BIG_SPACE
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: modules.SPACE5
  },
  text: {
    fontSize: modules.FONT_H4,
    ...Battambang
  },
  text1: {
    fontSize: modules.FONT_H5,
    ...Battambang,
    color: "#5f6368"
  }
});
