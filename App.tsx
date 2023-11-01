import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/home/Home';
import Booking from './src/screen/booking/Booking';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notifications" component={Booking} />
  </Stack.Navigator>
  )
}

export default App

