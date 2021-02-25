import React,{useState} from 'react'
import {View,Text,Modal,TouchableWithoutFeedback,StyleSheet,Keyboard} from 'react-native'
import Button from '../components/Button'
import { MaterialIcons } from '@expo/vector-icons';
import {Formik} from 'formik'
import { material } from 'react-native-typography'
import Header from '../components/Header'
import TextInput from '../components/TextInput'

const CardDetails = ({navigation}) => {
    const [modalOpen,setModalOpen] = useState(false)
    const product  = navigation.getParam('product');
    return (
        <View style = {{paddingTop : 30,...styles.container}}>
        <Modal visible={modalOpen} animationType='slide' >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons 
              name='close'
              size={24} 
              style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)}  
            />
            
            <View style={{alignItems : 'center'}}>
            <Header>Update Weight</Header>
            </View>
            <Formik
                initialValues={{weight:product.weight}}  //set the weight to the weight currently present
                onSubmit = {
                    (values,actions) => {
                    actions.resetForm(); 
                    product.weight = values.weight
                    console.log(values)
                    setModalOpen(false)
                    }
                }
            >
            {(props) => (
            <View>
                <TextInput 
                style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
                label = 'Weight in kg'
                placeholder='Weight in kg'
                onChangeText = {props.handleChange('weight')}
                value = {props.values.weight}
                keyboardType = "numeric"
            />
            <View style={styles.buttons}>
            <Button
              style = {{width : '30%'}}
              mode="outlined"
              onPress={() => setModalOpen(false)}
              compact = 'true'
              >
              Cancel
            </Button>
            <Button
              style = {{width : '30%'}}
              mode="contained"
              onPress={props.handleSubmit}
              compact = 'true'
              >
              Submit
            </Button>
            </View>
            </View>
            )}
            </Formik>
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
              {/* {product.wasteName === 'Scrap Metal' ? <Text style={styles.contrastBlueTitle}>10</Text> : null
              }
              {product.wasteName === 'Plastic' ? <Text style={styles.contrastBlueTitle}>20</Text> : null
              }
              {product.wasteName === 'Newspaper' ? <Text style={styles.contrastBlueTitle}>10</Text> : null
              } */}
            <Text style={styles.contrastBlueTitle}>{product.price_per_kg}</Text>
            </View>
            <View style={{flexDirection : 'row'}}>
            <Text style={styles.blueTitle}>Resultant Price : </Text>
            <Text style={styles.contrastBlueTitle}>{(parseFloat(product.weight)*product.price_per_kg).toFixed(2)}</Text>
            </View>
            {/* <Text>{product.key}</Text> */}
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Button mode="contained" style={{width : '20%'}} onPress={() => {
                console.log("Edit Button Clicked")
                setModalOpen(true)
            }}>
            Edit
            </Button>
            </View>
            
        </View>
    )
}

export default CardDetails

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
        color: '#560CCE'
      },
      contrastBlueTitle : {
        ...material.titleObject,
        color: '#1e90ff'
      }
})
// update the database here itself instead of sending data back to main myItems page

// To be done
// 1> Styling of Text(completed)
// 2> Edit Button(completed)
