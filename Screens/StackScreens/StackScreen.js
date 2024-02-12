import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabScreen from "../BottomTabScreens/BottomTabScreen"
import SelectedItem from './SelectedItem'

const StackScreen = () => {

    const options = {
        headerShown: false
    }

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={BottomTabScreen}
                name='Home Screen'
                options={options}

            />
            <Stack.Screen
                component={SelectedItem}
                name='Selected Unit'
                options={options}
            />
        </Stack.Navigator>
    )
}

export default StackScreen