import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import checkPage from '../screens/checkPage'
import HomeStack from '../Routes/homeStack'

const rootDrawerNavigator = createDrawerNavigator({
    Home : {
        screen : HomeStack,
    },
    checkPage : {
        screen : checkPage,
    }
})
//check

export default createAppContainer(rootDrawerNavigator)