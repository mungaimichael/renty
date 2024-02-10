import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from "@expo/vector-icons"

const Find = () => {
    const [search, setSearch] = useState('')
    return (
        <View className="bg-slate-200  rounded-lg my-2 flex-col justify-end w-[90%] mx-auto " >
            <View className="w-[80%] flex flex-row justify-between items-center mx-auto mt-4 " >

                <Ionicons
                    name='menu'
                    size={24} />

                <View className="flex flex-row items-end" >
                    <Ionicons name='location-outline' size={24} />
                    <Text>Nairobi</Text>
                </View>

            </View>
            <View className='w-[80%] mt-2 mx-auto '>
                <Text className="text-3xl font-bold mt-2  ">
                    Looking For The Perfect</Text>
                <Text className="text-3xl font-bold mt-2 text-[#4C536E]">Place ? </Text>

            </View>

            <View className="  flex-row  justify-around items-center rounded-2xl  my-6 h-12 w-[90%] mx-auto">

                <View className="flex-row justify-start items-center w-[80%] h-12 border-2 border-primary p-2 rounded-lg">

                    <TouchableOpacity className="my-auto">
                        <Feather name='search' size={20} className="my-auto " color={"black"} />
                    </TouchableOpacity>
                    <TextInput
                        className=" h-full px-2 text-black"
                        value={search}
                        onChangeText={(newValue) => setSearch(newValue)}
                        placeholder='favourite location ? '
                    />

                </View>
                <View>
                    <TouchableOpacity
                        className="w-6 h-full my-auto justify-center items-center">
                        <Ionicons name='filter' size={22} color={'#4C536E'} />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default Find