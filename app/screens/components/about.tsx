import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MODULE from '../../modules'
import _styles from '../../_styles'
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
    // name: string
    // position: string
    // positionS: string
    // born: string
    // family: string
    // wife: string
    // religion: string
    // generalKnowledge: string
    // addressOffice: string
    // currentAddress: string
    // phone: string
    // max: string
    // favorite: string
}

export default ({}: Props) => {
    return (
        <View  style={styles.group}>
            <View style={styles.groupMain}>
                <Text style={styles.mainTitle}>ថ្នាក់ដឹកនាំ</Text>
            </View>
            <View style={[styles.profile,]}>
            <Text style={styles.title}>ជីវប្រវត្ដិ សម្ដេចក្រឡាហោម ស ខេង</Text>
                    <FastImage style={styles.img} source={{ uri: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/72720246_2491270407818299_7476442953049702400_o.jpg?_nc_cat=105&_nc_ohc=nv5QhxCngEEAQmNT6ouRcN0XXhxRQQlyiq-Q880KqgXsM3kh83XrhfNSw&_nc_ht=scontent.fpnh1-1.fna&oh=d6bddbcda9822da75110a6fa2800562c&oe=5E43709E' }}  />
                <Text style={styles.subTitle}>ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងមហាផ្ទៃ</Text>
                <View style={styles.groupText}>
                    
                    
                </View>
            </View>
            <View style={styles.box}>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ឈ្មោះ</Text>
    <Text style={styles.textRight}>សម្ដេចក្រឡាហោម ស ខេង</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ឋានៈ</Text>
    <Text style={styles.textRight}>ឧបនាយករដ្ឋមន្ត្រី រដ្ឋមន្ត្រីក្រសួងមហាផ្ទៃ</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>តួនាទី</Text>
    <Text style={styles.textRight}>ឧបនាយករដ្ឋមន្ត្</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ថ្ងៃ ខែ ឆ្នាំ កំណើត</Text>
    <Text style={styles.textRight}>born</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ស្ថានភាពគ្រួសារ</Text>
    <Text style={styles.textRight}>family</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ភរិយាឈ្មោះ</Text>
    <Text style={styles.textRight}>wife</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>សាសនា</Text>
    <Text style={styles.textRight}>religion</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>កម្រិតវប្បធ័ម</Text>
    <Text style={styles.textRight}>generalKnowledge</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>អាសយដ្ឋានការិយាល័យ</Text>
                    <Text style={styles.textRight}>addressOffice</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>អាសយដ្ឋានបច្ចុប្បន្ន</Text>
                    <Text style={styles.textRight}>currentAddress</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ទូរស័ព្ទលេខ</Text>
    <Text style={styles.textRight}>phone</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ទូរសាលេខ</Text>
    <Text style={styles.textRight}>max</Text>
                </View>
                <View style={[_styles.rows, styles.detail]}>
                    <Text style={styles.text}>ចំណង់ចំណូលចិត្ដ</Text>
                    <Text style={styles.textRight}>favorite</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    group: {
        paddingTop: MODULE.CARD_RADIUS,
        paddingHorizontal: MODULE.BODY_HORIZONTAL_12,
        paddingBottom: MODULE.BODY_HORIZONTAL_12,
    
    },
    groupMain: {
        borderBottomWidth: 4,
        borderColor: MODULE.LINK,
    },
    mainTitle: {
        fontSize: MODULE.FONT_H5,
        color: MODULE.LINK,
        fontWeight: '700',
        paddingLeft: MODULE.BIG_SPACE,
        fontFamily: 'Battambang-Bold',
    },
    profile: {},
    img: {
        marginTop: MODULE.CARD_RADIUS,
        height: MODULE.VIEW_PORT_HEIGHT / 4,
        borderRadius: MODULE.GRID_SPACING,
    },
    groupText: {
        flex: 2,
        paddingLeft: MODULE.CARD_RADIUS,
    },
    title: {
        paddingTop: MODULE.CARD_RADIUS,
        fontSize: MODULE.FONT,
        color: MODULE.LINK,
        fontWeight: '700',
        fontFamily: 'Battambang-Bold',
    },
    subTitle: {
        paddingTop: MODULE.GRID_SPACING,
        fontSize: MODULE.FONT_H5,
        color: MODULE.LINK,
        fontFamily: 'Battambang-Regular',
    },
    box:{
        paddingTop: MODULE.BIG_SPACE,
    },
    detail: {
        paddingTop: MODULE.GRID_SPACING,
    },
    text: {
        flex: 1.2,
        fontSize: MODULE.FONT_P,
        color: MODULE.LINK,
        fontFamily: 'Battambang-Regular',
    },
    textRight:{
        flex: 2,
        fontSize: MODULE.FONT_P,
        color: MODULE.SUB_TEXT,
        fontFamily: 'Battambang-Regular',
    },
})

