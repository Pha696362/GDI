import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import HeaderContainer from "../components/HeaderContainer";
import FastImage from "react-native-fast-image";
import modules from "../../modules";
import { BattambangBold, Battambang } from "../../../function/customFont";
import _styles from "../../_styles";
import DetailWebView from "../components/DetailWebView";
export interface Props {
  onBack: any;
  HeaderTitle?: any;
  speechData: any;
  loading: boolean;
}

export interface State {}

export default ({ onBack, speechData }: Props) => {
  const editname = speechData ? speechData.editname : "";
  return (
    <View style={_styles.flx1}>
      <HeaderContainer HeaderTitle="ប្រសាសន៍សម្ដេច" onGoBack={onBack} />
      <View style={styles.webView}>
        <DetailWebView html={editname} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  IMG: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  text: {
    fontSize: modules.FONT_H4,
    ...Battambang,
    color: "#192"
  },
  webView: {
    flex: 1,
    paddingLeft: modules.BODY_HORIZONTAL * 1.5,
    paddingTop: modules.BODY_HORIZONTAL
  }
});
