
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
import HeaderMain from "../components/HeaderMain";
import modules from "../../modules";
import CardVideoScroll from "../components/CardVideoScroll";
import TextSlider from "../components/TextSlider";
import CardNews from "../components/CardNews";
import YouTube from "react-native-youtube";
import { Battambang } from "../../../function/customFont";

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
  onPlayVideo: any;
  videoTitle: string;
  speechData: any;
  playVideo: boolean;
  onShare: any;
}
export default ({
  onShare,
  onClickDrawer,
  onClickNews,
  contentDoc,
  loading,
  onRefresh,
  DuringMomentum,
  onEndReach,
  loadingMore,
  youtubeDoc,
  youtubeId,
  onPlayVideo,
  videoTitle,
  speechData,
  playVideo
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
      <HeaderMain openDrawer={onClickDrawer} />

      <View style={{ flex: 1 }}>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <FlatList
            stickyHeaderIndices={[0]}
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
            ListHeaderComponent={
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <YouTube
                    videoId={youtubeId}
                    play={playVideo}
                    controls={1}
                    apiKey={"AIzaSyBXZ2Lis8S_OeC18JsIFuo4WoIejkCYW9M"}
                    fullscreen={true}
                    onChangeState={(e: any) => {
                      changeState(e.state);
                    }}
                    loop
                    style={{
                      alignSelf: "stretch",
                      display: "none",
                      height: modules.VIEW_PORT_HEIGHT / 3.85
                    }}
                    // modestbranding={false}
                  />
                  {youtubeDoc ? (
                    youtubeDoc.map((i: any, index: any) => {
                      return (
                        <View>
                          <CardVideoScroll
                            key={index}
                            uri={i.snippet.thumbnails.high.url}
                            title={i.snippet.title}
                            loading={buffer}
                            Play={() =>
                              onPlayVideo(i.id.videoId, i.snippet.title)
                            }
                          />
                        </View>
                      );
                    })
                  ) : (
                    <View />
                  )}
                </ScrollView>
                <TextSlider speechData={speechData} />
              </View>
            }
            keyExtractor={(i, index) => index.toString()}
            renderItem={({ item }: any)=> (
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
