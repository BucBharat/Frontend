import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Button from '../components/Button'
import { material } from 'react-native-typography'
const PaymentPage = ({navigation}) => {
    return(
        <View>
        <Text style={[material.title,{textAlign: 'center'}]}>Amount to be paid  </Text>
        <Text style={[styles.blueTitle,{textAlign: 'center'}]}>Rs 200</Text>
        <View style={{
            alignItems : 'center',
            }}>
        <Button mode="contained" style={{
            width : '20%',
            }} 
            onPress={() => {
            // console.log('Cod button pressed')
            navigation.navigate('AmountPaid')
        }}>
                COD
        </Button>
        </View>
        </View>
    )
}

export default PaymentPage;

const styles = StyleSheet.create({
    addingPaddingTop : {
        paddingTop : 30
    },
    blueTitle: {
        ...material.titleObject,
        color: '#560CCE'
      },
})