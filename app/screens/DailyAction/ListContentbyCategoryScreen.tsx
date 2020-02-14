import * as React from "react";
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
import { BattambangBold, Battambang } from "../../../function/customFont";
import VideoCardHome from "../components/VideoCardHome";
import { removeTag } from "../../services/mapping.service";
import CardVideoScroll from "../components/CardVideoScroll";
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
  onPlayVideo: any;
  videoTitle: string;
  youtubeId: string;
  speechData: any;
  onBack: any;
  selectCategory:any;
  onShare:any
 
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
  onBack,
  selectCategory,
  onShare,
  
}: Props) => {
  // const Category = contentDoc[0]
  // console.log("Category",Category)
  return (
    <View style={styles.Container}>
      <SafeAreaView style={{backgroundColor:modules.COLOR_MAIN}}/>
      <HeaderContainer onGoBack={onBack} HeaderTitle={selectCategory}/>
      
      <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    
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
  }
});
