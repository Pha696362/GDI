import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import modules from "../../modules";
import _styles from "../../_styles";
import Icon from "react-native-vector-icons/Feather";
import SafeAreaView from "react-native-safe-area-view";
import { BattambangBold } from "../../../function/customFont";
import FastImage from "react-native-fast-image";

interface Props {
  onBack: any;
  HeaderTitle?: any;
}

export default ({ onBack,HeaderTitle }: Props) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={onBack}>
        <Icon style={styles.fontSize} name="arrow-left" />
      </TouchableOpacity>
      <Text style={styles.HeaderTitle}>
        {HeaderTitle}
      </Text>
      <FastImage
          style={styles.Logo}
          source={require("../../images/logo.png")}
          resizeMode={FastImage.resizeMode.cover}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection:'row',
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    backgroundColor: modules.COLOR_MAIN,
    paddingVertical: modules.SPACE5,
    justifyContent:'space-between',
    alignItems:'center'
  
  
  },
  fontSize: {
    fontSize: 24,
    fontWeight: "500",
    color: "#fff"
  }, 

  HeaderTitle:{
    fontSize:18,
    ...BattambangBold,
    color:modules.WHITE,
    paddingRight:modules.PADDING
  },
  Logo: {
    paddingHorizontal: modules.BODY_HORIZONTAL,
    width: 40,
    height:40
  }
});
