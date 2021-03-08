import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

const checkPage = () => {
    return(
        <View style={styles.addingPadding}>
        <Text>Navigation checking</Text>
        </View>
    )
}

export default checkPage

const styles = StyleSheet.create({
    addingPadding : {
        paddingTop : 30
    }
})