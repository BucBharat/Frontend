import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';

import React from 'react';

export default function Header() {
  return (
		<View style = {styles.header}>
    <Text style = {styles.title}> My Items </Text>
    </View>
  );
}

const styles = StyleSheet.create({
	header: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'coral',
	},
	title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
	},
});