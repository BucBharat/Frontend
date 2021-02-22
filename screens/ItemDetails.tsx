import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Card} from 'react-native-elements'
import pic from '../assets/images/favicon.png';
//const pic = '../assets/images/favicon.png';
export default function ItemDetails({ pressHandler, item }) {

  return (
  <TouchableOpacity onPress={() => pressHandler(item.key)}>			
	<Card containerStyle={styles.item}>
	{/* <Card.Title>{item.waste}</Card.Title> */}
	<Card.Title>{item.wasteName}</Card.Title>
		<Card.Divider/>
		<Text> {item.weight} </Text>
		<Card.Image containerStyle = {styles.image} source = {require('../assets/images/favicon.png')} resizeMode = 'contain' />
		
		
		</Card>
    </TouchableOpacity>
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
		justifyContent: 'flex-start'
	}
});