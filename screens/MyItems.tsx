import { SafeAreaProvider } from 'react-native-safe-area-context';

import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,	
	Alert,
	TouchableOpacity,
	Keyboard,
	Button,
	Image
} from 'react-native';

import {
	Icon
 } from 'react-native-elements'

import MyHeader from './Header';
import ItemDetails from './ItemDetails';
import AddItem from './AddItem';

export default function MyItems({navigation}) {
	const [myItems, setMyItems] = useState([
		{ waste: 'plastic item 1', weight: '2', key: '1' },
		{ waste: 'paper item 1' , weight: '2', key: '2' },
		{ waste: 'metal item 1', weight: '2', key: '3' },

		{ waste: 'plastic item 2', weight: '2',key: '4' },
		{ waste: 'paper item 2', weight: '2', key: '5' },
		{ waste: 'metal item 2',weight: '2',  key: '6' },

		{ waste: 'plastic item 3', weight: '2', key: '7' },
		{ waste: 'paper item 3', weight: '2', key: '8' },
		{ waste: 'metal item 3', weight: '2', key: '9' },
	]
	);

	const displayItem = (id: string) => {
		Alert.alert('Inside displayItem()');
	}

	const addItemHandler = () => {
		navigation.navigate('AddItem',myItems)
	}

	const submitHandler = () => {
		
		Alert.alert('Inside submitHandler()');
	}
	

	return (
		<SafeAreaProvider>
		<View style={styles.container}>
			<MyHeader />
			<View style={styles.content}>
				<Text> My Items </Text>
				<View style={styles.list}>
					<FlatList
						data={myItems}
						renderItem = {({item}) => (
							<ItemDetails item={item} pressHandler={displayItem} />
						)}
					/>
				</View>
                
				
        	    
                <Icon 
                reverse
				name='add' 
                type='material' 
                size= {30}
                color='#f50'
				onPress={addItemHandler}
				containerStyle={styles.buttonContainer} />
             
			</View>
		</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 5,
		marginTop: 20,
		marginBottom: 0,
	//	backgroundColor: 'cyan',
	},
	content: {
		flex: 1,
		marginHorizontal: 10,
		marginTop: 0,
		marginBottom: 10,
		paddingHorizontal: 5,
		paddingVertical: 10,
	//	backgroundColor: 'pink'
	},
	list: {
		flex: 1,
		marginTop: 10,
		marginBottom: 10,
	//	backgroundColor: 'pink'
	},
	buttonContainer: {
		height: 70,
		width: 70,
		bottom: 60,
		right: 30,
		position: 'absolute',
		alignContent: 'center',
		fontSize: 60,
	},
});

