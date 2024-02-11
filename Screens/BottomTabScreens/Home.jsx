import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import Find from '../../Components/Home/Find';
import Carousel from '../../Components/Home/Carousel';

const Home = () => {
    return (
        <SafeAreaView  >
            <ScrollView className=" " >
                <Find />
                <Carousel />
            </ScrollView>
        </SafeAreaView>
    );
}
export default Home;
