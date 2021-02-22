// import React, { useState } from 'react';
// import { StyleSheet, View, TextInput,  Text, Alert, Picker } from 'react-native';
// import {Formik} from 'formik'
// import Button from '../components/Button'

// export default function AddItemsForm() {
//     <Picker 
//             style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
            
//             onValueChange = {props.handleChange('wasteName')}
//             // value = {props.values.wasteName}
//             selectedValue = {props.values.wasteName}
//             prompt = 'Select waste category'
//             mode = 'dropdown'
//             // value = {props.values.wasteName}
//             >
//               <Picker.Item label="Scrap Metal" value="Scrap metal"/>
//               <Picker.Item label="Newspaper" value="Newspaper"/>
//               <Picker.Item label="Plastic" value="Plastic"/>
//            </Picker>

//             <TextInput 
//             style = {{padding : 10,borderWidth : 1,borderColor : '#ddd',fontSize : 18,borderRadius : 6}}
//             placeholder='Weight in kg'
//             onChangeText = {props.handleChange('weight')}
//             value = {props.values.weight}
//             keyboardType = "numeric"
//             />
// }