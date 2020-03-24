

import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-vector-icons/FontAwesome5";
import modules from "../../modules";

interface Props {
  uri: any;
  title: any;
  Play: any;
  loading?:boolean;
}
interface State {}

export default ({loading, uri, title, Play }: Props) => {
  const [Progress, setProgress] = React.useState();
  return (
    <View style={styles.group}>
        <View style={styles.play}>
          <TouchableOpacity
            style={styles.cover}
            onPress={Play}
          >
            <FastImage style={styles.img} source={{ uri: uri }}>
              {loading ? (
                <ActivityIndicator size="large" color={modules.WHITE}/>
              ) : (
                <Icon style={styles.icon} name="youtube" />
              )}
            </FastImage>
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    backgroundColor: modules.WHITE,
    paddingHorizontal:modules.SPACE/2
  },
  play: {
    width: modules.VIEW_PORT_WIDTH,
    height: modules.VIEW_PORT_HEIGHT / 3.5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "100%",
    width: modules.VIEW_PORT_WIDTH,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  cover: {
    overflow: "hidden"
  },
  video: {
    display: "none"
  },
  icon: {
    color: "red",
    fontSize: modules.FONT_H3 * 2
  },
  title: {
    fontSize: modules.FONT_H5,
    color: modules.WHITE,
    position:"absolute",
    zIndex:0,
    top:10,
    paddingRight:12,
    backgroundColor:'rgba(0,0, 0,0.3)'
  }
});
