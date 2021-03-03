import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import { material } from 'react-native-typography'
import MyHeader from './Header';
import {Block} from 'galio-framework';
import Product from '../components/Product'
import MarketProduct from '../components/MarketProduct'
import MarketItem from '../screens/MarketItem'
import Search from '../components/Search'


export default function Market({navigation}){

    const marketItems = [
    { wasteName: 'Scrap Metal', weight: '2', key: '1' ,price_per_kg : '10'},
    { wasteName: 'Newspaper' , weight: '2', key: '2', price_per_kg : '20' },
    { wasteName: 'Plastic', weight: '2', key: '3',price_per_kg : '30' },
    { wasteName: 'Scrap Metal', weight: '2',key: '4',price_per_kg : '10' },
    { wasteName: 'Newspaper', weight: '2', key: '5',price_per_kg : '20' },
    { wasteName: 'Plastic',weight: '2',  key: '6',price_per_kg : '30' },
    { wasteName: 'Scrap Metal', weight: '2', key: '7',price_per_kg : '10' },
    { wasteName: 'Newspaper', weight: '2', key: '8',price_per_kg : '20' },
    { wasteName: 'Plastic', weight: '2', key: '9',price_per_kg : '30' },
    ]
    return (
        <View>
        <MyHeader title="Market"/>
        <Search />
        {/* <View style={styles.content}> */}
				{/* <Block flex> */}
                <View style={{flexDirection : 'column',top : 0}}>
					<FlatList
						data={marketItems}
						renderItem = {({item}) => (
							<MarketProduct product={item} horizontal navigation = {navigation}/>
                            // <Text>Hello</Text>
						)}
					/>
                </View>
				{/* </Block> */}
        {/* </View> */}
        </View>
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


// export default Market