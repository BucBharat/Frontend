import React from 'react'
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export default function ItemDetails({ pressHandler, item }) {
  return (

    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.waste}</Text>
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