import { View, Text, Button, FlatList, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import useDataFetch from '../../Hooks/useDataFetch'
import { useNavigation } from '@react-navigation/native'

const Carousel = () => {

    const { data, loading } = useDataFetch('https://realty-in-us.p.rapidapi.com/properties/v3/list')

    if (loading) {
        return (
            <View>
                <Text>
                    Loading
                </Text>
            </View>
        )
    }
    return (
        <View>
            <Text
                // style={{ fontFamily: 'bold' }}
                className="  text-xl ml-3 py-2 font-primary  "
            >
                New Listings
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex flex-row ml-4"
            >

                {
                    data &&
                    data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            item={item}
                        />
                    ))

                }

            </ScrollView>
        </View>
    )
}


const CarouselItem = ({ item }) => {
    const navigation = useNavigation()
    const {
        property_id,
        status,
        location: {
            address: {
                city,
                country
            },
            street_view_url

        },
        description: {
            beds,
            baths,
            sqft,
            type
        },
        primary_photo: {
            href
        }

    } = item

    return (
        <Pressable
            className="mx-2"
            onPress={() => navigation.navigate('Selected Unit', { item })}

        >
            <View
                className="h-[250] w-[200] border-0 shadow-xl rounded-2xl bg-slate-300/20 flex  "
            >
                {/* <Text>{property_id}</Text>
                <Text>{type}</Text>

                <Text>{status}</Text>
                <Text>{city}, {country}</Text>
                <Text>{beds}, {baths}, {sqft}</Text> */}
                <Image
                    source={{ uri: href }}
                    className=" w-full  mx-auto rounded-lg  aspect-square  "
                />
                <View
                    className="flex flex-row justify-around items-center mt-2"
                >

                    <Text className="  ml-4 rounded-xl bg-blue-500/10 p-1 flex items-center justify-center " >{status === 'for_sale' ? "Sale" : "Sale"}</Text>
                    <Text className=" w-[120] ml-4  p-1 my-1 bg-slate-400/20 " > {city} {country}</Text>

                </View>



            </View>

        </Pressable>
    )
}

export default Carousel