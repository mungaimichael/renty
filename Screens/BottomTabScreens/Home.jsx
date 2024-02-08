import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Home = () => {
    return (
        <SafeAreaView className="flex-1 h-screen  bg-blue-800" >
            <View className="h-9 w-screen flex flex-row justify-around items-center" >
                <Ionicons name="menu" size={24} color="#4C536E" />
            </View>
        </SafeAreaView>
    );
}


export default Home;
