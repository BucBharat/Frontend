import React from 'react'
import {StyleSheet, TouchableNativeFeedback, Text, Image} from 'react-native';
// import {Card} from 'react-native-elements'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import pic from '../assets/images/favicon.png';
import Product from '../components/Product'
//const pic = '../assets/images/favicon.png';
export default function ItemDetails({ pressHandler, item }) {
	// const cardTouchHandler = () => {
	// 	console.log("Card touched")
	// }
  return (		
		<Product product={item} horizontal />
  )
}

const styles = StyleSheet.create({
  item: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		marginHorizontal: 5,
		marginVertical: 5,
		paddingHorizontal: 10,
		paddingBottom: 200,
		alignContent: 'center',
		fontSize: 20,
		backgroundColor: '#fff',
	},
    image: {
		flex: 1,
		justifyContent: 'center'
	}
});