import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Button from '../components/Button'
import { material } from 'react-native-typography'
import { Card} from 'react-native-elements'

const PaymentPage = ({navigation}) => {
    return(
        <View>
            <Card >
            <View style={[{flexDirection : 'row'}]}>
            <View style={{width : '80%',paddingLeft : 0}}>
            <View style={{flexDirection:'row'}}>
            <Text style={material.title}> Amount to be paid </Text>
            <Text style={styles.blueTitle}> Rs 200 </Text>
            </View>
            </View>
            </View>
            <Text style={styles.blueTitle}> Plastic </Text>
            <Text style={styles.blueTitle}> 20 kgs </Text>
            <Card.Divider/>
            <View style={{flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    alignItems : 'stretch',
                }}>
            <Button
              style = {{width : '30%'}}
              mode="contained"
              onPress={() => console.log('Cancel')}
              compact = 'true'
              >
              Cancel
            </Button>
            </View>
            </Card>
        {/* <Text style={[material.title,{textAlign: 'center'}]}>Amount to be paid  </Text>
        <Text style={[styles.blueTitle,{textAlign: 'center'}]}>Rs 200</Text>
        <View style={{
            alignItems : 'center',
            }}>
        <Button mode="contained" style={{
            width : '20%',
            }} 
            onPress={() => {
            // console.log('Cod button pressed')
            navigation.navigate('AmountPaid')
        }}>
                COD
        </Button>
        </View> */}
        <Card >
            <View style={[{flexDirection : 'row'}]}>
            <View style={{width : '80%',paddingLeft : 0}}>
            <View style={{flexDirection:'row'}}>
            <Text style={material.title}> Amount to be paid </Text>
            <Text style={styles.blueTitle}> Rs 200 </Text>
            </View>
            </View>
            </View>
            <Text style={styles.blueTitle}> Plastic </Text>
            <Text style={styles.blueTitle}> 20 kgs </Text>
            <Card.Divider/>
            <View style={{flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems : 'stretch',
                }}>
            <Button
              style = {{width : '30%'}}
              mode="contained"
              onPress={() => console.log('Get-otp')}
              compact = 'true'
              >
              Get-otp
            </Button>
            <Button
              style = {{width : '50%'}}
              mode="contained"
              onPress={() => console.log('Make Payment')}
              compact = 'true'
              >
              Make Payment
            </Button>
            </View>
            </Card>
        </View>
    )
}

export default PaymentPage;

const styles = StyleSheet.create({
    addingPaddingTop : {
        paddingTop : 30
    },
    blueTitle: {
        ...material.titleObject,
        color: '#560CCE'
      },
})