import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderContainer from '../components/HeaderContainer'
export interface Props {
  onBack:any;
  HeaderTitle?:any
}

export interface State {
}

export default ({onBack,HeaderTitle}:Props)=>{
    return (
      <View>
         <HeaderContainer
         onGoBack={onBack}
         />
      </View>
    );
  }
