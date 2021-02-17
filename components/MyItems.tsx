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
//import {icon} from 'antd'
import Header from './Header';
import ItemDetails from './ItemDetails';



export default function MyItems() {
	const [myItems, setMyItems] = useState([
		{ waste: 'plastic item 1', key: '1' },
		{ waste: 'paper item 1' , key: '2' },
		{ waste: 'metal item 1', key: '3' },

		{ waste: 'plastic item 2', key: '4' },
		{ waste: 'paper item 2',  key: '5' },
		{ waste: 'metal item 2',  key: '6' },

		{ waste: 'plastic item 3',  key: '7' },
		{ waste: 'paper item 3', key: '8' },
		{ waste: 'metal item 3',  key: '9' },
	]
	);

	const displayItem = (id: number) => {
		<Text>Display details of {id} </Text>
	}

	const addItemHandler = () => {

	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>

				<View style={styles.list}>
					<FlatList
						data={myItems}
						renderItem = {({item}) => (
							<TouchableOpacity /*onPress={() => pressHandler(item.key)}*/>
      							<Text style={styles.item}> {item.waste}</Text>
    						</TouchableOpacity>
				//			<ItemDetails item={item} /*pressHandler={displayItem}*/ />
						)}
					/>
				</View>
                
				
        	    
                <Icon 
                name='add' 
                type='material' 
                reverse
                color='#f50'
				containerStyle={styles.buttonContainer} />
             
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 5,
		marginTop: 20,
		marginBottom: 5,
		//backgroundColor: 'blue',
	},
	content: {
		flex: 1,
		marginHorizontal: 10,
		marginTop: 5,
		marginBottom: 10,
		paddingHorizontal: 5,
		paddingVertical: 10,
		//backgroundColor: 'pink'
	},
	list: {
		flex: 1,
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#dad'
	},
	buttonContainer: {
		height: 70,
		width: 70,
		bottom: 60,
		right: 30,
		position: 'absolute',
		backgroundColor: '#000',
		alignContent: 'center',
		fontSize: 10,
		borderRadius: 100,
	},
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

