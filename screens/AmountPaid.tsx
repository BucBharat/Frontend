import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Button from '../components/Button'
import { material } from 'react-native-typography'

const AmountPaid = ({navigation}) => {
    return(
        <View>
        <Text style={[styles.contrastBlueTitle,{paddingTop : 30,textAlign: 'center'}]}>Notification sent to the seller</Text>
        {/* <Text style={{paddingTop : 30}}>Amount paid successfully</Text> */}
        <Text style={[styles.blueTitle,{textAlign: 'center'}]}>Amount paid successfully</Text>
        </View>
    )
}

export default AmountPaid;

const styles = StyleSheet.create({
    addingPaddingTop : {
        paddingTop : 30
    },
    blueTitle: {
        ...material.titleObject,
        color: '#560CCE'
    },
    contrastBlueTitle : {
        ...material.titleObject,
        color: '#1e90ff'
    }
})