import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import useDataFetch from '../../Hooks/useDataFetch';
import useImageFetch from '../../Hooks/useImageFetch';

const SelectedItem = ({ route: { params } }) => {

    const [like, setLike] = useState(false)
    const { href, beds, baths, sqft, city, country, id, list_price } = params;

    const navigation = useNavigation()


    // get item photos
    const { loading, images: { photos } } = useImageFetch(id)







    return (
        <SafeAreaView  >
            <ScrollView

                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1  h-screen">
                    <View className=" p-4  flex-row justify-between items-center absolute t-12 w-full z-[999]">
                        <TouchableOpacity
                            className="fixed"
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color={'#fff'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setLike(prev => prev ? false : true); console.log(photos.length) }}>
                            <Ionicons

                                name='heart' color={like ? "red" : "white"} size={30} />
                        </TouchableOpacity>
                    </View>
                    <View className="h-1/2 mb-4 " >
                        <ScrollView
                            horizontal
                            className="bg-black  "
                        >
                            {
                                photos && photos.slice(0, 20).map((photo, index) => {
                                    const { href } = photo;
                                    return (
                                        <Image
                                            key={index}
                                            source={{ uri: href }}
                                            className=" w-screen  aspect-square rounded-lg"
                                        />
                                    );
                                })}

                        </ScrollView>
                    </View>
                    <View className="  rounded-t-3xl   w-full mt-[-20] bg-slate-500/10  ">
                        <View className="  flex-row justify-between items-center px-2 my-2" >
                            <Text className="font-regular text-lg ">
                                {beds} Bedroom
                            </Text>
                            <Text
                                className="font-regular text-lg font-bold"
                            >
                                {list_price}
                            </Text>
                        </View>
                        <View className=" pl-2  flex justify-between items-start  w-full ">
                            <View className=" flex-row justify-start items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <Ionicons key={index} name="star" size={20} color="gold" />
                                ))}
                                <Text className="text-gray-500 text-xs">(15 reviews)</Text>
                            </View>
                            <View>
                                <Ionicons
                                    name='location-outline'
                                    size={20}
                                    color={'black'}
                                />
                            </View>
                        </View>
                        <View className="pl-4 pt-4 ">
                            <Text className=" font-bold text-lg  ">overview</Text>

                            <Text className=" font-light pt-3 text-gray-500 tracking-wider text-xs">
                                {href}{" "}
                            </Text>
                        </View>

                        <View className="pl-4 pt-4 flex flex-row items-center gap-x-6 justify-start">
                            <View className="flex flex-row ">
                                <Ionicons name="bed-outline" size={18} color="#6CB2EB" />
                                <Text className="font-bold text-sm text-gray-700">
                                    {" "}
                                    {beds} beds
                                </Text>
                            </View>
                            <View className="flex flex-row">
                                <MaterialIcons
                                    color={"#6CB2EB"}
                                    name="bathtub"
                                    outline
                                    size={18}
                                />

                                <Text className="text-sm text-gray-600 font-bold">
                                    {baths} bathroom
                                </Text>
                            </View>
                            <View className="flex-row">
                                <Ionicons name="contract-outline" size={18} color={"#6CB2EB"} />
                                <Text className="text-sm text-gray-600 font-bold">
                                    {" "}
                                    {sqft} sqft{" "}
                                </Text>
                            </View>
                        </View>

                        <View className="pl-3 mt-4 pt-5  flex-row gap-x-2">
                            <Ionicons name="location" color={"#6CB2EB"} size={24} />
                            <Text className="text-xs text-gray-400">{country}</Text>
                        </View>

                    </View>
                </View>

                <View className="flex pl-4 pr-4  pb-2 flex-row justify-between bg-white">
                    <TouchableOpacity >
                        <View className="bg-black h-[40px] items-center w-[220px] rounded-2xl ">
                            <Text className="text-[#fff] font-bold text-md p-2">
                                {" "}
                                Book Now
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => handleCart()}
                        className="w-[40px] justify-center items-center   h-[40px] bg-black rounded-full"
                    >
                        <Ionicons name="cart-outline" color={"white"} size={22} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SelectedItem