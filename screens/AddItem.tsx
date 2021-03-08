import React, { useState } from 'react';
import { StyleSheet, View, TextInput,  Text, Alert, Picker, ActionSheetIOS } from 'react-native';
import {Formik} from 'formik'
import Button from '../components/Button'
import AddItemsForm from '../components/AddItemsForm'


export default function AddItem({ addReview,settingModalOpen}) {
  const [text, setText] = useState('');
  let wastename1,weight1,price_per_kg
  const changeHandler = (val) => {
    setText(val);

  };
  return (
    <View>
      <Formik
      initialValues={{wasteName : 'Scrap Metal',weight: '',price_per_kg : ''}}
      onSubmit = {
        (values,actions) => {
          actions.resetForm(); 
          if(values.wasteName === 'Scrap Metal')
            values.price_per_kg = '10'
          if(values.wasteName === 'Newspaper')
            values.price_per_kg = '20'
          if(values.wasteName === 'Plastic')
            values.price_per_kg = '30'
          addReview(values);
          console.log(values)
          // modalOpen = false
        }
      }
      >
        {(props) => (

          <View>
            <Picker 
            style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
            
            onValueChange = {props.handleChange('wasteName')}
            // value = {props.values.wasteName}
            selectedValue = {props.values.wasteName}
            prompt = 'Select waste category'
            mode = 'dropdown'
            // value = {props.values.wasteName}
            >
              <Picker.Item label="Scrap Metal" value="Scrap Metal"/>
              <Picker.Item label="Newspaper" value="Newspaper"/>
              <Picker.Item label="Plastic" value="Plastic"/>
           </Picker>

            <TextInput 
            style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
            placeholder='Weight in kg'
            onChangeText = {props.handleChange('weight')}
            value = {props.values.weight}
            keyboardType = "numeric"
            />
        
            <View style={styles.buttons}>

            <Button
              style = {{width : '30%'}}
              mode="outlined"
              onPress={() => settingModalOpen(false)}
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
            
            <Button
              style = {{width : '30%'}}
              mode="outlined"
              onPress={() => {
                wastename1 = props.values.wasteName
                weight1 = props.values.weight
                if(wastename1 === 'Scrap Metal')
                  price_per_kg = '10'
                if(wastename1 === 'Newspaper')
                  price_per_kg = '20'
                if(wastename1 === 'Plastic')
                  price_per_kg = '30'
                addReview({wasteName : wastename1,weight : weight1,price_per_kg : price_per_kg})
                console.log(props.values)                
                settingModalOpen(true)
                props.values.wasteName = "Scrap Metal"
                props.values.weight = ""
              }}
              //height = '30'
              compact = 'true'
              >
              Add
            </Button>
            
            </View>
          </View>
        )}
      </Formik>
    </View>  
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems : 'stretch',
    position : 'absolute',
    top : 500,
    paddingLeft : 30
    // left : 0
  }
});