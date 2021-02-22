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
	Image,
	Modal,
	TouchableWithoutFeedback,
	Pressable
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import {
	Icon
 } from 'react-native-elements'

import MyHeader from './Header';
import ItemDetails from './ItemDetails';
import AddItem from './AddItem';

export default function MyItems({navigation}) {
	const [modalOpen,setModalOpen] = useState(false)
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
	const [reviews, setReviews] = useState([{ wasteName: 'plastic item 1', weight: '2', key: '1' },
	{ wasteName: 'paper item 1' , weight: '2', key: '2' },
	{ wasteName: 'metal item 1', weight: '2', key: '3' },

	{ wasteName: 'plastic item 2', weight: '2',key: '4' },
	{ wasteName: 'paper item 2', weight: '2', key: '5' },
	{ wasteName: 'metal item 2',weight: '2',  key: '6' },

	{ wasteName: 'plastic item 3', weight: '2', key: '7' },
	{ wasteName: 'paper item 3', weight: '2', key: '8' },
	{ wasteName: 'metal item 3', weight: '2', key: '9' }])

	const displayItem = (id: string) => {
		Alert.alert('Inside displayItem()');
	}

	const addItemHandler = () => {
		navigation.navigate('AddItem',formItems)
	}

	const submitHandler = () => {
		
		Alert.alert('Inside submitHandler()');
	}


	const addReview = (review) => {
		review.key = Math.random().toString();
		// console.log(review)
		setReviews((currentReviews) => {
		  return [review, ...currentReviews];
		});
		setModalOpen(false);
	  };
	
	const settingModalOpen = () => {
		setModalOpen(true)
		// console.log(modalOpen)
	}

	return (
		
		<View style={styles.container}>
		<Modal visible={modalOpen} animationType='slide' >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)}  
            />
            <AddItem  addReview={addReview} settingModalOpen={settingModalOpen}/>
          </View>
        </TouchableWithoutFeedback>
      	</Modal>


			<MyHeader />
			<Text style={styles.textStyle}>{modalOpen}</Text>
			<View style={styles.content}>
				<Text> My Items </Text>
				<View style={styles.list}>
					<FlatList
						data={reviews}
						renderItem = {({item}) => (
							<ItemDetails item={item} pressHandler={displayItem} />
						)}
					/>
				</View>
                
				
        	    
                <MaterialIcons
				reverse 
                name='add' 
				size={24} 
				style={styles.modalToggle}
				onPress={() => setModalOpen(true)}  />
             
			</View>
		</View>
		
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
	modalToggle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#f2f2f2',
		padding: 10,
		borderRadius: 10,
		alignSelf: 'center',
	  },
	  modalClose: {
		marginTop: 20,
		marginBottom: 0,
	  },
	  modalContent: {
		flex: 1,
	  },
	  button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	  },
	  buttonClose: {
		backgroundColor: "#2196F3",
	  },
	  textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	  },
});

