import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home'
import ItemDetails from '../screens/itemDetails';
import Scan from '../screens/scan';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    ItemDetails: {
        screen: ItemDetails,
        navigationOptions: {
            headerTitle: "Item details"
        }
    },
    Scan: {
        screen: Scan,
    }
})

export default createAppContainer(HomeStack);