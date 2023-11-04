
import Home from './src/screen/home/Home';
import Booking from './src/screen/booking/Booking';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './src/navigation/TabNavigation';
TabNavigation
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Booking} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

