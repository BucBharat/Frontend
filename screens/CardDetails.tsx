import React from 'react'
import {View,Text} from 'react-native'
import Button from '../components/Button'

const CardDetails = ({navigation}) => {
    const product  = navigation.getParam('product');
    return (
        <View style = {{paddingTop : 30}}>
            <Text>Details of the Item</Text>
            <Text>{product.wasteName}</Text>
            <Text>{product.weight}</Text>
            <Text>{product.key}</Text>
            <Button mode="contained" onPress={() => {
                console.log("Edit Button Clicked")
            }}>
            Edit
            </Button>
            
        </View>
    )
}

export default CardDetails

// update the database here itself instead of sending data back to main myItems page

// To be done
// 1> Styling of Text
// 2> Edit Button
