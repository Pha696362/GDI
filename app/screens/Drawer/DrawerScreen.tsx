import * as React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView,Text } from "react-native";
import modules from "../../modules";
import _styles from "../../_styles";
import FastImage from "react-native-fast-image";
import DrawerCard from "../components/DrawerCard"
import {drawerNavigationList} from "../../dummy"
import { Battambang } from "../../../function/customFont";

export interface Props {
  onClick:any;
}

export interface State {}

export default ({onClick}: Props) => {
  return (
    <View>
      <View style={{ backgroundColor: modules.COLOR_MAIN }}>
        <SafeAreaView/>
        
        <View style={styles.DrawerContainer}>
        <View style={styles.BorderImage}>
          <FastImage
            style={styles.IMG}
            source={require("../../images/logo.png")}
          />
        </View>
        </View>
        
      </View>     

      
      <View>
            {drawerNavigationList.map((i,index) => {
              return (
                <DrawerCard
                  key={index}
                  onClickDrawer={() =>onClick(i)}
                  IconName={i.icon}
                  category={i.name}
                />
              );
            })}
           
        </View>
        <View style={{alignItems:"center", justifyContent:"center", marginTop:70}}>
        <Text style={styles.text}>ឆ្នាំ២០២០ © រក្សាសិទ្ធិគ្រប់យ៉ាង </Text>
        </View>
        
    </View>
  );
};
const styles = StyleSheet.create({
  DrawerContainer: {
    backgroundColor: modules.COLOR_MAIN,
     paddingVertical:modules.PADDING,
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    fontSize: modules.FONT_H3,
    color: modules.WHITE,
    ...Battambang
  },
  IMG: {
    height:modules.VIEW_PORT_WIDTH/3,
    width:modules.VIEW_PORT_WIDTH/3
  },
  text:{
    ...Battambang
  },
  BorderImage:{
    padding:modules.PADDING,
    borderRadius:modules.PADDING+100+5/2,

  }
});
