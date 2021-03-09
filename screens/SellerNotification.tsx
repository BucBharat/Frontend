import React from 'react'
import {View,Text,StyleSheet,TouchableNativeFeedback} from 'react-native'
import { Card, ListItem,  Icon } from 'react-native-elements'
import {material} from 'react-native-typography'
import Button from '../components/Button';

const SellerNotification = () => {
    return (
        <View style={styles.addingMarginTop}>
            <Card >
            <View style={[{flexDirection : 'row'},styles.addingPaddingTop]}>
            {/* <View style={{width : '20%'}}> */}
            {/* <Card.Image source={{uri: 'https://picsum.photos/700'}}>
                <Text style={{marginBottom: 10}}>
                
                </Text>
            </Card.Image> */}
            {/* </View> */}
            {/* <TouchableNativeFeedback onPress={() => console.log('something displayed')}> */}
            <View style={{width : '80%',paddingLeft : 0}}>
            <View style={{flexDirection:'row'}}>
            <Text style={material.title}> Buyer :  </Text>
            <Text style={styles.blueTitle}> George Trialer  </Text>
            </View>
                <Text style={{color : '#1e90ff'}}>
                    Details of Buyer, amount to be paid
                </Text>
                
            </View>
            {/* </TouchableNativeFeedback> */}
            </View>
            <Card.Divider/>
            <View style={{flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems : 'stretch',
                }}>
            <Button
              style = {{width : '30%'}}
              mode="contained"
              onPress={() => console.log('call')}
              compact = 'true'
              icon = 'phone'
              >
              Call
            </Button>
        
            <Button
              style = {{width : '30%'}}
              mode="contained"
              onPress={() => console.log('accept')}
              compact = 'true'
              >
              Accept
            </Button>
            <Button
              style = {{width : '30%'}}
              mode="outlined"
              onPress={() => console.log('reject')}
              compact = 'true'
              >
              Reject
            </Button>
            </View>
            </Card>
        </View>
        
    )
}

export default SellerNotification

const styles = StyleSheet.create({
    blueTitle: {
        ...material.titleObject,
        color: '#560CCE'
      },
      contrastBlueTitle : {
        ...material.titleObject,
        color: '#1e90ff'
      },
    addingPaddingTop : {
        paddingTop : 10,
        
    },
    addingMarginTop : {
        marginTop : 50
    }
})