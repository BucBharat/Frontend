import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MyItems from '../screens/MyItems';
import ItemDetails from '../screens/ItemDetails';
import AddItem from '../screens/AddItem';
import StartScreen from '../screens/StartScreen'
import RegisterScreen from '../screens/RegisterScreen'
// import { RegisterScreen } from '../screens';
import LoginScreen from '../screens/LoginScreen'
import CardDetails from '../screens/CardDetails'
import Product from '../components/Product'
import { Dashboard, ForgotPasswordScreen } from '../screens';
import BuyerOrSeller from '../screens/BuyerOrSeller'
import Market from '../screens/Market';
import BuyProduct from '../screens/BuyProduct'


const screens = {
    StartScreen : {
        screen : StartScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    RegisterScreen : {
        screen : RegisterScreen
    },
    LoginScreen : {
        screen : LoginScreen
    },
    ForgotPasswordScreen : {
        screen : ForgotPasswordScreen
    },
    Dashboard : {
        screen : Dashboard
    },
    MyItems: {
        screen: MyItems,
        navigationOptions: {
            headerShown: false
        }
    },
    AddItem: {
        screen: AddItem
    },
    ItemDetails: {
        screen: ItemDetails
    },
    CardDetails : {
        screen: CardDetails,
        navigationOptions: {
            headerShown: false
        }
    },
    BuyerOrSeller : {
        screen: BuyerOrSeller,
        navigationOptions: {
            headerShown: false
        }
    },
    Market : {
        screen : Market,
        navigationOptions: {
            headerShown: false
        }
    },
    BuyProduct : {
        screen: BuyProduct,
        navigationOptions: {
            headerShown: false
        }
    },
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {

    }
});

export default createAppContainer(HomeStack);