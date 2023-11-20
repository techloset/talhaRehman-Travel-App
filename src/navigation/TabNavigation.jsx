import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Booking from '../screen/booking/Booking';
import Room from '../screen/room/Room';

Booking
const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Booking} />
      <Tab.Screen name="Room" component={Room} />
    </Tab.Navigator>
  )
}

export default TabNavigation
