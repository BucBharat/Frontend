<<<<<<< HEAD
import React,{useState} from 'react'
import {View,Text,Modal,TouchableWithoutFeedback,StyleSheet,Keyboard} from 'react-native'
import Button from '../components/Button'
import { MaterialIcons } from '@expo/vector-icons';
import {Formik} from 'formik'
import { material } from 'react-native-typography'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { FAB } from 'react-native-paper';

const BuyProduct = ({navigation}) => {
    const [modalOpen,setModalOpen] = useState(false)
    const product  = navigation.getParam('product');
    return (
        <View style = {{paddingTop : 30,...styles.container}}>
        <Modal visible={modalOpen} animationType='slide' >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            {/* <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)}  
            /> */}
            <FAB 
              icon='close'
            //   size={24} 
            //  style={{...styles.modalToggle, ...styles.modalClose}} 
			        style = {styles.fabTop}
              onPress={() => setModalOpen(false)}  
            />
            <View style={styles.aligningCenter}>
            <Text style={styles.blueTitle}>Requesting Seller...</Text>
            <Text style={styles.contrastBlueTitle}>Notification sent</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      	</Modal>
            <View style={{alignItems : 'center'}}>
            <Header>Details of the Item</Header>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Waste Category : </Text>
            <Text style={styles.contrastBlueTitle}>{product.wasteName}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Weight(in Kgs) : </Text>
            <Text style={styles.contrastBlueTitle}>{product.weight}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Price/Kg : </Text>

            <Text style={styles.contrastBlueTitle}>{product.price_per_kg}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Resultant Price : </Text>
            <Text style={styles.contrastBlueTitle}>{(parseFloat(product.weight)*product.price_per_kg).toFixed(2)}</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Button mode="contained" style={{width : '20%'}} onPress={() => {
                setModalOpen(true)
            }}>
                Buy
            </Button>
            </View>
            
        </View>
    )
}

export default BuyProduct

const styles = StyleSheet.create({
    container: {
		flex: 1,
		marginBottom: 0,
	},
    modalToggle: {
		justifyContent: 'center',
		alignItems: 'center',
		// marginBottom: 10,
		borderWidth: 3,
		borderColor: 'white',
		padding: 10,
		borderRadius: 30,
		alignSelf: 'center',
		backgroundColor : '#99738E',
	  },
	  modalClose: {
		marginTop: 20,
		marginBottom: 0,
	  },
      modalContent: {
		flex: 1,
	  },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems : 'center'
      },
      blueTitle: {
        ...material.titleObject,
        color: '#560CCE',
        alignContent : 'center'
      },
      contrastBlueTitle : {
        ...material.titleObject,
        color: '#1e90ff',
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center'
      },
      aligningCenter : {
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center'
      },
      fabTop : {		// position: 'absolute',
		margin: 16,
		left: 5,
		top : 5,
		alignSelf : 'center'
	  }
})
// update the database here itself instead of sending data back to main myItems page


=======
import React,{useState} from 'react'
import {View,Text,Modal,TouchableWithoutFeedback,StyleSheet,Keyboard} from 'react-native'
import Button from '../components/Button'
import { MaterialIcons } from '@expo/vector-icons';
import {Formik} from 'formik'
import { material } from 'react-native-typography'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import { FAB } from 'react-native-paper';
import PaymentPage from '../screens/PaymentPage'

const BuyProduct = ({navigation}) => {
    const [modalOpen,setModalOpen] = useState(false)
    const product  = navigation.getParam('product');
    return (
        <View style = {{paddingTop : 30,...styles.container}}>
        <Modal visible={modalOpen} animationType='slide' >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            {/* <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)}  
            /> */}
            <FAB 
              icon='close'
            //   size={24} 
            //  style={{...styles.modalToggle, ...styles.modalClose}} 
			        style = {styles.fabTop}
              onPress={() => setModalOpen(false)}  
            />
            <View style={styles.aligningCenter}>
            <Text style={styles.blueTitle}>Requesting Seller...</Text>
            <Text style={styles.contrastBlueTitle}>Notification sent</Text>
            <Button mode="contained" style={{width : '40%'}} onPress={() => {
                // console.log('payment page')
                setModalOpen(false)
                navigation.navigate('PaymentPage')
            }}>
                Payment
            </Button>
            </View>
          </View>
        </TouchableWithoutFeedback>
      	</Modal>
            <View style={{alignItems : 'center'}}>
            <Header>Details of the Item</Header>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Waste Category : </Text>
            <Text style={styles.contrastBlueTitle}>{product.wasteName}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Weight(in Kgs) : </Text>
            <Text style={styles.contrastBlueTitle}>{product.weight}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Price/Kg : </Text>

            <Text style={styles.contrastBlueTitle}>{product.price_per_kg}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Resultant Price : </Text>
            <Text style={styles.contrastBlueTitle}>{(parseFloat(product.weight)*product.price_per_kg).toFixed(2)}</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Button mode="contained" style={{width : '20%'}} onPress={() => {
                setModalOpen(true)
            }}>
                Buy
            </Button>
            </View>
            
        </View>
    )
}

export default BuyProduct

const styles = StyleSheet.create({
    container: {
		flex: 1,
		marginBottom: 0,
	},
    modalToggle: {
		justifyContent: 'center',
		alignItems: 'center',
		// marginBottom: 10,
		borderWidth: 3,
		borderColor: 'white',
		padding: 10,
		borderRadius: 30,
		alignSelf: 'center',
		backgroundColor : '#99738E',
	  },
	  modalClose: {
		marginTop: 20,
		marginBottom: 0,
	  },
      modalContent: {
		flex: 1,
	  },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems : 'center'
      },
      blueTitle: {
        ...material.titleObject,
        color: '#560CCE',
        alignContent : 'center'
      },
      contrastBlueTitle : {
        ...material.titleObject,
        color: '#1e90ff',
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center'
      },
      aligningCenter : {
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center'
      },
      fabTop : {		// position: 'absolute',
		margin: 16,
		left: 5,
		top : 5,
		alignSelf : 'center'
	  }
})
// update the database here itself instead of sending data back to main myItems page


>>>>>>> added cod button in the payment
