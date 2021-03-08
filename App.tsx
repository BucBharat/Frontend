import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Header from './screens/Header';
import ItemDetails from './components/ItemDetails';
import MyItems from './screens/MyItems';
import AddTodo from './screens/AddItem'
import {Alert} from 'react-native';
// import Navigator from './Routes/homeStack'
import Navigator from './Routes/drawer'

import Search from './components/Search'




export default function App() {
	return (
		<Navigator />
		// <Search />
	);
}