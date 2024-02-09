import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Screens/BottomTabScreens/Home'
import Settings from './Screens/BottomTabScreens/Settings'
import Favorites from './Screens/BottomTabScreens/Favorites'
import Notifications from './Screens/BottomTabScreens/Notifications'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons, FontAwesome } from '@expo/vector-icons';

const Navigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        < >
            <Tab.Navigator
                screenOptions={({ route: { name } }) => {
                    return ({
                        tabBarIcon: ({ focused }) => {
                            let icon;
                            if (name === "home") {
                                focused ? icon = 'home' : icon = "home-outline"
                            }
                            else if (name === "settings") {
                                focused ? icon = 'settings' : icon = "settings-outline"

                            }
                            else if (name === "favorites") {
                                focused ? icon = 'heart' : icon = "heart-outline"

                            }
                            else if (name === "notifications") {
                                return focused ?
                                    <FontAwesome name="bell" size={20} color={focused ? "#0D34BF" : "black"} /> :
                                    <FontAwesome name="bell-o" size={20} color={focused ? "#0D34BF" : "black"} />;
                            }


                            return < Ionicons name={icon} size={20} color={focused ? "#0D34BF" : "black"} />
                        },
                        tabBarLabelStyle: {
                            color: "black",
                            textTransform: 'capitalize',
                            paddingTop: 4
                        },
                        tabBarHideOnKeyboard: true,
                        headerShown: false,
                        tabBarStyle: {
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            left: 0,
                            elevation: 0,
                            height: 40,
                            backgroundColor: 'rgba(76, 83, 110, 0.02)',
                            borderTopWidth: 0,
                            paddingBottom: 4
                        }


                    })
                }}

            >
                <Tab.Screen
                    component={Home}
                    name='home'
                    options={() => {
                        return ({
                            headerLeft: () => <Ionicons name='menu' size={24} style={{ paddingLeft: 12 }} />,
                            headerTitle: '',
                            headerRight: () => {
                                return (
                                    <View className="mr-2 h-14 w-20  flex-row justify-center items-center" >
                                        <Ionicons name='location-outline' size={24} style={{ paddingRight: 12 }} />
                                        <Text className="text-primary font-bold " >Nairobi</Text>
                                    </View>
                                )
                            },
                            headerShown: false

                        })
                    }}
                />

                <Tab.Screen
                    component={Favorites}
                    name='favorites'
                />
                <Tab.Screen
                    component={Notifications}
                    name='notifications'
                />
                <Tab.Screen
                    component={Settings}
                    name='settings'
                />
            </Tab.Navigator>
        </>
    )
}

export default Navigator