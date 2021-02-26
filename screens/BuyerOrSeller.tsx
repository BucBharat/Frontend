import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import Button from '../components/Button'
import Navigation from '../navigation'

const BuyerOrSeller = ({navigation}) => {

    const onBuyerPressed = () => {
        // console.log('Buyer side')
        navigation.navigate('Market')
    }
    const onSellerPressed = () => {
        // console.log('seller side')
        navigation.navigate('MyItems')
    }
    return (
        <View style={styles.buttons}>
        <Button mode="contained" onPress={onBuyerPressed} style={{width:'40%'}}>
            Buyer
        </Button>
        <Button mode="contained" onPress={onSellerPressed} style={{width:'40%'}}>
            Seller
        </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'stretch',
        position : 'absolute',
        top : 300,
        paddingLeft : 50
        // left : 0
      }
})
export default BuyerOrSeller