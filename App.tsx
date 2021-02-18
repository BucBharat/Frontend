import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import Header from './components/Header';
import ItemDetails from './components/ItemDetails';
import MyItems from './components/MyItems';




export default function App() {
	return (
		<MyItems />
	);
}

