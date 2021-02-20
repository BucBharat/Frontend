import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Header from './components/Header';
import ItemDetails from './components/ItemDetails';
import MyItems from './components/MyItems';
import AddTodo from './components/AddItem'
import {Alert} from 'react-native';
import Navigator from './Routes/homeStack'


// const submitHandler = () => {
		
// 	Alert.alert('Inside submitHandler()');
// }



export default function App() {
	return (
		<Navigator />
		// <AddTodo submitHandler={submitHandler} />
	);
}