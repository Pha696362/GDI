import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  
} from "react-native";
import _styles from "../../_styles";
import HeaderMain from "../components/HeaderMain";
import modules from "../../modules";
import TextSlider from "../components/TextSlider";
import CardNews from "../components/CardNews";
import { BattambangBold, Battambang } from "../../../function/customFont";
import VideoCardHome from "../components/VideoCardHome";
import { removeTag } from "../../services/mapping.service";
import CardVideoScroll from "../components/CardVideoScroll";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";

interface Props {
  onClickDrawer: () => void;
  onClickNews: any;
  contentDoc: any[];
  loading: boolean;
  loadingMore: boolean;
  onRefresh: () => void;
  DuringMomentum: (value: boolean) => void;
  onEndReach: () => void;
  youtubeDoc: any;
  onPlayVideo: any;
  videoTitle: string;
  youtubeId: string;
  speechData: any;
  onShare:any,
  onModal: (item: any) => void


}
export default ({
  onClickDrawer,
  onClickNews,
  contentDoc,
  loading,
  onRefresh,
  DuringMomentum,
  onEndReach,
  loadingMore,
  youtubeDoc,
  onPlayVideo,
  speechData,
  onShare,


}: Props) => {
  const [visable, setVisable] = useState(false);
  return (
    <View style={styles.Container}>
            
      <SafeAreaView style={{backgroundColor:modules.COLOR_MAIN}}/>
      <HeaderMain openDrawer={onClickDrawer} />
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {/* {!youtubeDoc ?
        null
        : youtubeDoc.map((i: any, index: any) => {
          return (
            <CardVideoScroll
              key={index}
              uri={i.snippet.thumbnails.high.url}
              title={i.snippet.title}
              youtubeId={i.id.videoId}
            />
          );
        })
      } */}
    </ScrollView>
      </View>
      
      <View style={{ flex: 1 }}>
        <TextSlider speechData={speechData} />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={contentDoc}
            refreshing={loading}
            onEndReached={onEndReach}
            onRefresh={onRefresh}
            onEndReachedThreshold={0.01}
            onMomentumScrollBegin={() => {
              DuringMomentum(false);
            }}
            onMomentumScrollEnd={() => {
              DuringMomentum(true);
            }}
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator
                  style={{ paddingVertical: modules.BODY_HORIZONTAL }}
                  size="large"
                />
              ) : (
                <View style={{ paddingVertical: modules.BODY_HORIZONTAL }} />
              )
            }
            keyExtractor={(i, index) => index.toString()}
            renderItem={({ item, index }) => (
              <CardNews
                key={index}
                onClickNews={() => onClickNews(item)}
                imgUrl={item.fileurl}
                title={item.name}
                date={item.create_date.seconds}
                editname={item.editname}
                onShare={()=>onShare(item)}
                
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: modules.FACEBOOK_BACKGROUND
  },
  ImageBox: {
    width: "100%",
    height: 300
  },
  Header: {
    position: "absolute",
    zIndex: Platform.OS === "ios" ? 50 : 0,
    top: Platform.OS === "ios" ? 62 : 20,
    paddingHorizontal: modules.PADDING
  },
  iconTabContainer: {
    fontSize: modules.FONT_H4,
    color: modules.COLOR_MAIN,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 30
  },
  VTitle: {
    paddingHorizontal: modules.PADDING,
    marginVertical: modules.GRID_SPACING + 4
  },
  ButtonTab: {
    paddingHorizontal: modules.PADDING + 5,
    marginVertical: modules.GRID_SPACING,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: modules.COLOR_MAIN,
    fontSize: modules.FONT_H5,
    ...Battambang
  },
  textMore: {
    color: modules.COLOR_MAIN,
    fontSize: modules.FONT_P
  },
  border: {
    borderBottomColor: modules.COLOR_MAIN,
    borderBottomWidth: 0.3
  },
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: 'flex-end',


  },
  content: {
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
  sharetext: {
    color: modules.SUB_TEXT,
    fontSize: 16,


  },
});
