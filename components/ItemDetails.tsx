import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Card} from 'react-native-elements'
export default function ItemDetails({ pressHandler, item }) {

//import pic from '../assets/images/favicon.png'

  return (

    <TouchableOpacity onPress={() => pressHandler(item.key)}>			
      <Card containerStyle={styles.item}>
	 <Card.Title>{item.waste}</Card.Title>
	  <Card.Divider/>
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
	}
});