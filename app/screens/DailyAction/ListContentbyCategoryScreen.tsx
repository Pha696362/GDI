
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Platform
} from "react-native";
import _styles from "../../_styles";
import HeaderMain from "../components/HeaderMain";
import modules from "../../modules";
import TextSlider from "../components/TextSlider";
import CardNews from "../components/CardNews";

import CardVideoScroll from "../components/CardVideoScroll";
import { Battambang } from "../../../function/customFont";
import HeaderContainer from "../components/HeaderContainer";
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
  youtubeId: string;
  onPlayAndroid: any;
  videoTitle: string;
  speechData: any;
  playVideo: boolean;
  onShare:any;
  selectCategory?:any;
  onBack:any;
  categoryTitle:string;
}
export default ({

  onClickNews,
  contentDoc,
  loading,
  onRefresh,
  DuringMomentum,
  onEndReach,
  loadingMore,
  youtubeDoc,
  youtubeId,
  onShare,
  onPlayAndroid,
  videoTitle,
  speechData,
  playVideo,
  selectCategory,
  onBack,
  categoryTitle,

}: Props) => {
  const [buffer, setBuffer] = useState(false);
  const changeState = (state: any) => {
    if (state == "buffering") {
      setBuffer(true);
    } else {
      setBuffer(false);
    }
  };

  
  return (
    <View style={styles.Container}>
      <SafeAreaView style={{backgroundColor:modules.COLOR_MAIN}}/>
      <HeaderContainer onBack={onBack} HeaderTitle={categoryTitle}/>

      <View style={{ flex: 1 }}>
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
           
            keyExtractor={(i, index) => index.toString()}
            renderItem={({ item }: any) => (
              <CardNews
                loading={buffer}
                key={item.key}
                onClickNews={() => onClickNews(item)}
                imgUrl={item.fileurl}
                title={item.name}
                editname={item.editname}
                date={item.create_date.seconds}
                onShare={()=>onShare(item.key)}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

const renderFooter = (loadingMore: boolean) => {
  if (loadingMore) return <ActivityIndicator color={'black'} size={'large'} />
  return <View style={{ height: 80 }} />
}

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
  }
});