import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, Picker } from 'react-native';
import {Formik} from 'formik'
import {
  Dropdown }
  from 'react-native-material-dropdown';

export default function AddItem({navigation}) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);

  };
  return (
    <View>
      <Formik
      initialValues={{wasteName : '',weight:''}}
      onSubmit = {
        (values) => {
          console.log(values)
          Alert.alert('Submitted')
        }
      }
      >
        {(props) => (

          <View>
            {/* <TextInput 
            style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
            placeholder='Waste name'
            onChangeText = {props.handleChange('wasteName')}
            value = {props.values.wasteName}
            /> */}
            <Picker 
            style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
            
            onValueChange = {props.handleChange('wasteName')}
            // value = {props.values.wasteName}
            selectedValue = {props.values.wasteName}
            prompt = 'Select waste category'
            mode = 'dropdown'
            // value = {props.values.wasteName}
            >
              <Picker.Item label="Scrap Metal" value="Scrap metal"/>
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
            <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
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
});