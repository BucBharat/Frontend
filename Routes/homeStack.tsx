// <<<<<<< HEAD
// import { createStackNavigator} from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
// import MyItems from '../screens/MyItems';
// import ItemDetails from '../screens/ItemDetails';
// import AddItem from '../screens/AddItem';
// import StartScreen from '../screens/StartScreen'
// import RegisterScreen from '../screens/RegisterScreen'
// // import { RegisterScreen } from '../screens';
// import LoginScreen from '../screens/LoginScreen'
// import CardDetails from '../screens/CardDetails'
// import Product from '../components/Product'
// import { Dashboard, ForgotPasswordScreen } from '../screens';
// import BuyerOrSeller from '../screens/BuyerOrSeller'
// import Market from '../screens/Market';
// import BuyProduct from '../screens/BuyProduct'


// const screens = {
//     StartScreen : {
//         screen : StartScreen,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
//     RegisterScreen : {
//         screen : RegisterScreen
//     },
//     LoginScreen : {
//         screen : LoginScreen
//     },
//     ForgotPasswordScreen : {
//         screen : ForgotPasswordScreen
//     },
//     Dashboard : {
//         screen : Dashboard
//     },
//     MyItems: {
//         screen: MyItems,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
//     AddItem: {
//         screen: AddItem
//     },
//     ItemDetails: {
//         screen: ItemDetails
//     },
//     CardDetails : {
//         screen: CardDetails,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
//     BuyerOrSeller : {
//         screen: BuyerOrSeller,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
//     Market : {
//         screen : Market,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
//     BuyProduct : {
//         screen: BuyProduct,
//         navigationOptions: {
//             headerShown: false
//         }
//     },
    
// }

// const HomeStack = createStackNavigator(screens, {
//     defaultNavigationOptions: {

//     }
// });

// =======
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
import PaymentPage from '../screens/PaymentPage'
import AmountPaid from '../screens/AmountPaid'
import SellerNotification from '../screens/SellerNotification'


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
    PaymentPage : {
        screen: PaymentPage,
        // title : 'Payment Page',
        // name : 'Payment Page',
        navigationOptions: {
            title : 'Payment Page',
            headerTitleStyle: { alignSelf: 'center' },
            // headerShown: false
        }
    },
    AmountPaid : {
        screen: AmountPaid,
        // title : 'Payment Page',
        // name : 'Payment Page',
        navigationOptions: {
            headerShown: false
        }
    },
    SellerNotification : {
        screen: SellerNotification,
        // title : 'Payment Page',
        // name : 'Payment Page',
        navigationOptions: {
            title : 'Notifications',
            headerTitleStyle: { alignSelf: 'center' },
            // headerShown: false
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {

    }
});

// >>>>>>> added cod button in the payment
export default createAppContainer(HomeStack);