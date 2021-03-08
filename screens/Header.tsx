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
	
	const notificationHandler = () => {
		Alert.alert('notifications')
	}
  return (
    
		<Header
  		leftComponent={{ icon: 'menu', color: '#fff', onPress: () => Alert.alert('Drawer') }}
  		centerComponent={{ text: props.title, style: {fontSize: 20, color: '#fff' } }}
  		rightComponent={{ icon: 'notifications', color: '#fff', onPress: () => notificationHandler() }}
      backgroundColor='#560CCE'
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