import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity ,StatusBar, SafeAreaView, Alert,} from "react-native";
import Modal from 'react-native-modal';
import modules from "../../modules";
import { ScrollView } from "react-navigation";
import FastImage from "react-native-fast-image";

import More from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/Ionicons'
import { Battambang, BattambangBold } from "../../../function/customFont";


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useState } from "react";
import { _formatDateTime } from "../../services/format.service";
import DetailWebView from "../components/DetailWebView";
interface Props {

  onBack: any;
  HeaderTitle?: any;
  dataSelected: any;
  saveData?: any;
  onShare: any
  onPress?: (item: any) => void


}

export default ({onBack, dataSelected, saveData,onShare }: Props) => {


  return (
    
    <View style={styles.container}>
      <StatusBar barStyle='light-content'/>
      <SafeAreaView />
      <View style={styles.headerDetail}>
        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}} onPress={onBack}>
          <Icons style={styles.arrow} name='ios-arrow-back' />
          <Text style={{fontSize:16,...BattambangBold,color:'white'}}>{dataSelected.category.name}</Text>
        </TouchableOpacity>
       
        <View style={styles.TouchableOpacity}>

          <TouchableOpacity  onPress={()=>onShare()} >
            <Share name="share-2" style={styles.Share} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.ImgCover}
          source={{
            uri: dataSelected.fileurl

          }}
        />
        <View style={styles.TextArea}>
          <Text style={styles.text}>
            {dataSelected.name}
          </Text>

          <Text style={styles.Date}>{dataSelected.create_date
            ? _formatDateTime(dataSelected.create_date.seconds)
            : ""}</Text>

        </View>
        <View style={styles.WebView}>

          <DetailWebView html={dataSelected.editname} />
        </View>

        {/* <View style={styles.centerMode}>
            <Text style={styles.TextDate}>© រក្សាសិទ្ធគ្រប់យ៉ាង.</Text>
          </View> */}
      </ScrollView>



    </View>
  );
};
const styles = StyleSheet.create({
  TouchableOpacity: {
    flexDirection: 'row',
    padding: 5
  },
  arrow: {
    fontSize: 30,
    color:'white',
    padding: 10,
  },
  WebView: {
    marginTop: 12
  },
  BorderLine: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 3,
    width: modules.VIEW_PORT_WIDTH / 4,
    marginTop: modules.PADDING
  },
  Date: {
    fontSize: modules.FONT_P,
    marginTop: modules.SPACE5,
    color: modules.SUB_TEXT
  },
  Writer: {
    fontSize: modules.FONT_P,
    marginTop: modules.SPACE5,
    ...Battambang
  },
  TextArea: {
    paddingHorizontal: modules.BODY_HORIZONTAL_12,
    paddingTop: modules.PADDING,
    backgroundColor:'#fff'



  },
  text: {
    fontSize: modules.FONT_H5,
    color:modules.TITLE_HEADER,
    ...BattambangBold,

  },
  container: {
    flex: 1,
    backgroundColor:modules.COLOR_MAIN
  },
  content: {
    flex: 1,
    backgroundColor: modules.WHITE
  },
  ImgCover: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 3
  },
  More_Icon: {
    fontSize: 24,
    padding: 6,
    color:'white'

  },
  Share: {
    fontSize:modules.FONT_H3,
    padding: 6,
    color:'white'


  },
  headerDetail: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor:modules.COLOR_MAIN,
    height: 50
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',


  },
  modal: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 4.5,


  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bodysave: {
    height: 5,
    width: 60,
    borderRadius: 5,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    margin: 6


  },
  savestyles: {
    flex: 1,
    backgroundColor: '#ffffff',



  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.1)'




  },
  icon: {
    fontSize: 30,
    margin: 16
  },

  text1: {
    color: modules.SUB_TEXT,
    fontSize: 16,


  },
  Desc: {
    fontSize: 12,
    color: modules.SUB_TEXT,

  },
  centerMode: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: modules.BODY_HORIZONTAL
  },
  TextDate: {
    ...Battambang,
    color: modules.TEXT_NOTE,
    fontSize: modules.FONT_S
  },

});
