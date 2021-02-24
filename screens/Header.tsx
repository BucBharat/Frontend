import { SafeAreaProvider } from 'react-native-safe-area-context';
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
import React from 'react';
import {Header} from 'react-native-elements'

const MyHeader = (props) => {
  return (
    
		<Header
  		leftComponent={{ icon: 'menu', color: '#fff' }}
  		centerComponent={{ text: props.title, style: {fontSize: 20, color: '#fff' } }}
  		rightComponent={{ icon: 'home', color: '#fff' }}
      backgroundColor='#09f'
      barStyle='light-content'
      containerStyle = {styles.header}
		/>
  );
}

export default MyHeader

const styles = StyleSheet.create({
	header: {
    // marginVertical: 10,
    // marginHorizontal: 10,
    // paddingVertical: 20,
    // paddingHorizontal: 20,
	},
	title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
	},
});