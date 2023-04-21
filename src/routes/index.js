import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SplashScreen, SignIn, Detail, ProfileScreen, FavoritesScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../styles/theme'
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

const routeIcons = {
    Favorites: 'heart',
    Home: 'home',
    user: 'user',
}

export const BottomRoute  = () => {
    const Tab = createBottomTabNavigator()
return(

    <Tab.Navigator 
    screenOptions={({ route, headerShown   }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
            return (
            <FontAwesome name={routeIcons[route.name]} size={size} color={color} />
            )
        }
    })}     //screenOptions={{headerShown: false}}
    tabBarOptions={{
        activeTintColor: theme.colors.blue,
        inactiveTintColor: theme.colors.white,
        tabStyle: {
            backgroundColor: theme.colors.black,
        },
    }}
    >   
        <Tab.Screen options={{ tabBarLabel: 'Favoritos'}} name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen options={{ tabBarLabel: 'perfil'}} name="user" component={ProfileScreen } />
    </Tab.Navigator>
)

}

export const Routes = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name= "Splash" component={SplashScreen} />
                <Stack.Screen name= "SignIn" component={SignIn} />
                <Stack.Screen name= "Home" component={BottomRoute} />
                <Stack.Screen name= "Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

