import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import LocationIcon from 'react-native-vector-icons/Ionicons';
import UserIcon from 'react-native-vector-icons/FontAwesome';
import Plus from '../assets/images/ActionButton.png';
import Home from '../screen/home/Home';
import Booking from '../screen/booking/Booking';
import Room from '../screen/room/Room';
import { Color } from '../style/GlobalStyle';

const Navigation = () => {
  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{
          top: -50,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{
          width: 70
        }}>{children}</View>
      </TouchableOpacity>
    );
  };

  const screenData = [
    { name: 'Home', component: Home, icon: 'home', iconComponent: HomeIcon },
    { name: 'Booking', component: Booking, icon: 'search', iconComponent: SearchIcon },
    { name: 'Room', component: Room, icon: Plus, iconComponent: 'Image' },
    { name: 'Home1', component: Home, icon: 'location', iconComponent: LocationIcon },
    { name: 'Room1', component: Room, icon: 'user', iconComponent: UserIcon },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Color.primary, height: 70, shadowOffset: -10, shadowColor: 'rgba(92, 108, 156, 0.10)', marginHorizontal:10, borderRadius:30,paddingHorizontal:10,position:"absolute" },
        tabBarActiveTintColor: Color.black,
      }}
    >
      {screenData.map(({ name, component, icon, iconComponent }, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={component}
          options={() => ({
            tabBarIcon: ({ focused }) => {
              const lightbulb = focused ? Color.buttonPrimary : Color.white;
              const size = 30;
              if (typeof iconComponent === 'string' && iconComponent === 'Image') {
                return (
                  <Image
                    source={icon}
                    resizeMode='contain'
                    style={{
                      top: -15,
                      backgroundColor: 'transparent',
                      borderRadius: 0
                    }}
                  />
                );
              }
              return React.createElement(iconComponent, { name: icon, size, color: lightbulb });
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navigation;