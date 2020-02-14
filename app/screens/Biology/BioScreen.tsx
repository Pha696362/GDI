import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HeaderContainer from "../components/HeaderContainer";
import FastImage from "react-native-fast-image";
import modules from "../../modules";
// import { BattambangBold, Battambang } from "functions/customFont";
import _styles from "../../_styles";
import DetailWebView from "../components/DetailWebView";
export interface Props {
  onBack: any;
  bioData: any;
}

export interface State {}

export default ({ onBack, bioData }: Props) => {
  const editname = bioData ? bioData.editname : "";
  return (
    <View style={_styles.flx1}>
      <HeaderContainer HeaderTitle="ជីវប្រវត្តិ" onGoBack={onBack} />
      <ScrollView>
        <View style={styles.card}>
          <FastImage
            style={{ width: 200, height: 200 }}
            source={require("../../images/logo.png")}
          />

          <View style={styles.webView}>
            <DetailWebView html={editname} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: modules.BACKGROUND_PRIMARY,
    margin: modules.BODY_HORIZONTAL_12,
    paddingBottom: modules.BODY_HORIZONTAL_12,
    borderRadius: modules.CARD_RADIUS,
    flex: 1,
    alignItems: "center"
  },
  webView: {
    paddingHorizontal: modules.BODY_HORIZONTAL
  }
});
