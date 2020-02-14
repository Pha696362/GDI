import * as React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import modules from "../../modules";
import { inject, observer } from "mobx-react";
import FastImage from "react-native-fast-image";
import { NavigationStackScreenProps } from "react-navigation-stack";

interface Props extends NavigationStackScreenProps {
  messaging: any;
}
interface State {}
@inject("messaging")
@observer
export default class WelcomrScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    await this.props.messaging.setUserToken();
    await this.props.messaging.checkPermission();
    await this.props.messaging.initialNotification();
    setTimeout(() => {
      this.props.navigation.navigate("AppTab");
    }, 500);
  }
  public render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: modules.COLOR_MAIN,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <FastImage
          source={require("../../images/logo.png")}
          style={{ width: modules.VIEW_PORT_WIDTH / 2, height: 200 }}
        />
        {/* <FastImage
          source={require("../../images/logo.png")}
          style={{
            width: modules.VIEW_PORT_WIDTH / 1.2,
            height: 60,
            paddingVertical: 12
          }}
        /> */}
      </View>
    );
  }
}
