import * as React from 'react';
import {View , StyleSheet,Text,TouchableNativeFeedback} from 'react-native'
import { Searchbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flexDirection : 'row'
    // ,justifyContent : 'center'
    ,alignItems : 'center',
    paddingTop : 10
    }}>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style = {{width : '70%'}}
    />
    <TouchableNativeFeedback onPress={() => console.log('sort clicked native')} >
    <View style = {{width : '15%',flexDirection : 'row'}}>
    <MaterialIcons 
              name='sort'
              size={24} 
              // style = {{width : '7%'}}
              // style={{...styles.modalToggle, ...styles.modalClose}} 
              // onPress={() => 
              //   // setModalOpen(false)
              //   console.log('Sort clicked')
              // }  
    />
    <Text>Sort</Text>
    </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => console.log('Filter clicked native')} >
    <View style = {{width : '15%',flexDirection : 'row'}}>
    <FontAwesome
              name='filter'
              size={24} 
              // style = {{width : '7%'}}
              // style={{...styles.modalToggle, ...styles.modalClose}} 
              // onPress={() => 
              //   // 
              //   console.log('Filter clicked')
              // }  
    />
    <Text>Filter</Text>
    </View>
    </TouchableNativeFeedback>
    </View>
  );
};

export default MyComponent;