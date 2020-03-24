
import * as React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image,TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import Address from 'react-native-vector-icons/Entypo'
import Fb from 'react-native-vector-icons/SimpleLineIcons'
import modules from '../../modules';
import { SafeAreaView } from 'react-navigation';
import AboutCarde from '../components/ContactCard';
import HeaderContainer from '../components/HeaderContainer';



interface Props {
  title: any
  img: string
  ContactSelect: any
  onBack: any;
  onfb: any;
  onPress?: (item: any) => void



}

interface State {
}

export default ({ onPress,onfb, onBack, ContactSelect }: Props) => {
  return (
   
     <View>
       <SafeAreaView style={{backgroundColor:modules.COLOR_MAIN}}/>
        <HeaderContainer onBack={onBack} />
      <View style={styles.Group}>
        <View style={styles.GroupAccount}>
          <View style={styles.groupIcon}>
            <Icon style={styles.icon} name="account-circle" />
          </View>
          <View style={styles.GroupText}>
            {ContactSelect.length > 0 ?
              <Text style={styles.TextName}>
                {ContactSelect[0].name}
              </Text> : null}
            <Text style={styles.text}>GDI.</Text>
          </View>
        </View>

        <View style={styles.GroupAccount}>
          <View style={[styles.groupIcon, { backgroundColor: '#007acc' }]}>
            <Icon style={styles.icon} name="phone" />
          </View>
          <View style={styles.GroupText}>
            <Text style={styles.TextName}>Phone Number</Text>
            {ContactSelect.length > 0 ?
              <Text style={styles.text}>
                0{ContactSelect[0].phonenumber}/08556666
              </Text> : null}
          </View>
        </View>

        <View style={styles.GroupAccount}>
          <View style={[styles.groupIcon, { backgroundColor: '#00995c' }]}>
            <Icon style={styles.icon} name="email" />
          </View>
          <View style={styles.GroupText}>
            <Text style={styles.TextName}>Email</Text>
            {ContactSelect.length > 0 ?
              <Text style={styles.text}>
                {ContactSelect[0].email}
              </Text> : null}
          </View>
        </View>

        <View style={styles.GroupAccount}>
          <View style={[styles.groupIcon, { backgroundColor: '#cc0000' }]}>
            <Address style={styles.icon} name="address" />
          </View>
          <View style={styles.GroupText}>
            <Text style={styles.TextName}>Address</Text>
            {ContactSelect.length > 0 ?
              <Text style={styles.text1}>
                {ContactSelect[0].address}
              </Text> : null}
          </View>
        </View>


        <View style={styles.GroupAccount}>
          <View style={[styles.groupIcon, { backgroundColor: '#007acc' }]}>
            <Fb style={styles.icon} name="social-facebook" />
          </View>
          <View style={styles.GroupText}>
            
                    
           <TouchableOpacity style={styles.text1} onPress={onfb}>
           <Text style={styles.TextName}>Facebook Pages</Text>
            </TouchableOpacity>
           
          
          </View>
        </View>
        

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  TextInfor: {
    fontSize: modules.FONT_H2 + 2,
    fontWeight: '500'
  },
  Group: {
    marginTop: modules.PADDING - 10,
    paddingHorizontal: modules.PADDING + 2,
    borderRadius: modules.RADIUS + 4
  },
  GroupAccount: {
    marginTop: modules.PADDING,
    padding: modules.PADDING + 3,
    backgroundColor: modules.WHITE,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: modules.SPACE - 3,
    borderRadius: modules.BIG_SPACE,
    borderColor: modules.BORDER,
  },
  img: {
    height: modules.MARGIN * 2,
    width: modules.MARGIN * 2,
  },
  GroupText: {
    paddingHorizontal: modules.PADDING + 5
  },
  TextName: {
    fontSize: modules.FONT_H3-2,
   
    color: '#111',
  },
  text: {
    fontSize: modules.FONT_H6,
    fontWeight: '300',
    marginTop: 5,
    color: modules.TEXT_NOTE,
  },
  text1: {
    fontSize: 13,
    fontWeight: '300',
    marginTop: 5,
    color: modules.TEXT_NOTE,
  },
  groupIcon: {
    backgroundColor: modules.ENGLISH,
    height: modules.PADDING * 3.6,
    width: modules.PADDING * 3.6,
    borderRadius: modules.PADDING * 3.6 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: modules.WHITE,
    fontSize: modules.FONT_H1,
  },
});


