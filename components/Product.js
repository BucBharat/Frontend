import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { StyleSheet, Dimensions, Image, TouchableNativeFeedback , TouchableWithoutFeedback} from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import CardDetails from '../screens/CardDetails'

// import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Product extends React.Component {
  render() {
    const { navigation,product, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];
    const cardTouchHandler = () => {
      // console.log(`Waste Category : ${product.wasteName}`)
      // console.log(`Weight in kg : ${product.weight}`)
      // console.log(product)
      navigation.navigate('CardDetails')
    }
    return (
      <Block row={horizontal} card flex style={[styles.product, styles.shadow, style]}>
        {/* <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('CardDetails')}> */}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('CardDetails',{product:product})}>
        {/* <TouchableWithoutFeedback onPress={() => <CardDetails product={product}/>}> */}
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={require('../assets/images/favicon.png')} style={imageStyles} />
          </Block>
          {/* </TouchableNativeFeedback> */}
        </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => navigation.navigate('CardDetails',{product:product})}>
         {/* <TouchableWithoutFeedback onPress={() => <CardDetails product={product}/>}> */}
         {/* <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('CardDetails')}> */}
          <Block flex space="between" style={styles.productDescription}>
            <Text size={14} style={styles.productTitle}>waste Category : {product.wasteName}</Text>
            <Text size={12} muted={!priceColor} color={priceColor}>weight : {product.weight}</Text>
          </Block>
          {/* </TouchableNativeFeedback> */}
        </TouchableWithoutFeedback>
      </Block>
      
    );
  }
}

export default Product;

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 90,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
    paddingRight :20,
    paddingLeft : 20,
    width : 20,
    height : 0
  },
  image: {
    borderRadius: 3,
    marginHorizontal: 0,
    marginVertical: 0,
    
    
  },
  horizontalImage: {
    height: 90,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});