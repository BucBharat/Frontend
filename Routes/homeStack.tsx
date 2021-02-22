import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MyItems from '../screens/MyItems';
import ItemDetails from '../screens/ItemDetails';
import AddItem from '../components/AddItem';
import StartScreen from '../screens/StartScreen'
import RegisterScreen from '../screens/RegisterScreen'
// import { RegisterScreen } from '../screens';
import LoginScreen from '../screens/LoginScreen'
import { Dashboard, ForgotPasswordScreen } from '../screens';


const screens = {
    StartScreen : {
        screen : StartScreen
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
        screen: MyItems
    },
    AddItem: {
        screen: AddItem
    },
    ItemDetails: {
        screen: ItemDetails
    },
    
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);