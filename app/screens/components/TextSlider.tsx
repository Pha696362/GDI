import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import TextTicker from 'react-native-text-ticker'
import modules from "../../modules";
import FastImage from "react-native-fast-image";
import { Battambang, BattambangBold } from "../../../function/customFont";
import { removeTag } from "../../services/mapping.service";
// import { Battambang, BattambangBold } from "../../functions/customFont";
// import { removeTag } from "../services/mapping.service";
// import { inject, observer } from "mobx-react";
interface Props {
  speechData: any;
}

interface State {}

export default ({ speechData }: Props) => {
  return speechData ?(
    <View style={styles.container}>
      <TextTicker
        style={{
          fontSize: 22,
          paddingHorizontal: 6,
          paddingVertical:3 ,
          flex: 1,
          color: modules.WHITE
        }}
       
        duration={50000}
        loop
        bounce
        repeatSpacer={50}
        marqueeDelay={1000}
      
      >
        <Text style={styles.text}>{removeTag(`${speechData.editname}`)}</Text>
      </TextTicker>
    </View>
  ):null;
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: "row",
    backgroundColor: modules.COLOR_MAIN,
    borderBottomColor: modules.WHITE,
    borderBottomWidth: 0.3,
    borderTopColor: modules.WHITE,
    borderTopWidth: 0.3
  },
  title: {
    backgroundColor: "#945",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginLeft: -150 / 2 + 50,
    marginBottom: 12,
    color: modules.WHITE,
    fontSize: modules.FONT_H4,
    ...Battambang
  },
  ImgTxt: {
    width: 50,
    height: 50,
    marginHorizontal: modules.SPACE
  }
});
