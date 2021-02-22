import React, { useState } from 'react';
import { StyleSheet, View, TextInput,  Text, Alert, Picker } from 'react-native';
import {Formik} from 'formik'
import Button from '../components/Button'
import AddItemsForm from '../components/AddItemsForm'


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
            
            {/* <AddItemsForm props={prop/> */}
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
        
            <View style={styles.buttons}>
        
            <Button
              style = {{width : '20%'}}
              mode="outlined"
              onPress={props.handleSubmit}
              height = '30'
              compact = 'true'
              >
              Cancel
            </Button>
        
            <Button
              style = {{width : '20%'}}
              mode="contained"
              onPress={props.handleSubmit}
              height = '30'
              compact = 'true'
              >
              Submit
            </Button>
            
            <Button
              style = {{width : '20%'}}
              mode="outlined"
              onPress={props.handleSubmit}
              height = '30'
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
    justifyContent: 'space-around',
    alignItems : 'center'

  }
});