import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import modules from '../../modules';
import { Battambang } from '../../../function/customFont';


interface Props {
}

export default ({ }: Props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.NameHeader}>ទំនាក់ទំនង</Text>
            <View style={styles.groupImg}>
                <Image style={styles.logo} source={require('../../images/logo.png')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: modules.WHITE,
        paddingVertical: modules.PADDING,
        borderBottomWidth: 1,
        borderColor: modules.BORDER,
    },
    groupImg: {
        height: 140,
        width: 140,

    },
    logo: {
        height: '100%',
        width: '100%',
    },
    NameHeader: {
        fontSize: 32,
        color: "#000",
        ...Battambang,
        textAlign: "center",
    },

});
