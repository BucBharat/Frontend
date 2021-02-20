import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MyItems from '../components/MyItems';
import ItemDetails from '../components/ItemDetails';
import AddItem from '../components/AddItem';

const screens = {
    
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