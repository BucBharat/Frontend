import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import { material } from 'react-native-typography'

const MarketItem = () => {
    return (
        <Text style= {styles.blueTitle}>Market Item</Text>
    )
}

const styles = StyleSheet.create({
    blueTitle: {
        ...material.titleObject,
        color: '#560CCE'
      },
    contrastBlueTitle : {
        ...material.titleObject,
        color: '#1e90ff'
      },
      content: {
		flex: 1,
		// marginHorizontal: 10,
		// marginTop: 0,
		// marginBottom: 10,
		// paddingHorizontal: 5,
		// paddingVertical: 10,
	    //	backgroundColor: 'pink'
	},
})

export default MarketItem