import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import _styles from "../../_styles";
import modules from "../../modules";
import CardNews from "../components/CardNews";
import HeaderDetail from "../components/HeaderContainer";

interface Props {
  onBack: any;
  onClickNews: any;
  dataAward: any[];
  loading: boolean;
  refresh: boolean;
  loadingMore: boolean;
  onRefresh: () => void;
  DuringMomentum: (value: boolean) => void;
  onEndReach: () => void;
}

interface State {}

export default ({
  onBack,
  onClickNews,
  dataAward,
  loading,
  onRefresh,
  DuringMomentum,
  onEndReach,
  loadingMore
}: Props) => {
  return (
    <View style={styles.Container}>
      <HeaderDetail onGoBack={onBack} HeaderTitle="ស្នាដៃ" />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataAward}
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
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: modules.FACEBOOK_BACKGROUND
  }
});
