import { View, Text, Button, FlatList, ScrollView } from 'react-native'
import React from 'react'
import useDataFetch from '../../Hooks/useDataFetch'
import SelectedItem from './SelectedItem'

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
                className="flex flex-row  ml-4"
            >

                {
                    data &&
                    data.map((item, index) => (
                        <SelectedItem
                            key={index}
                            item={item}
                        />
                    ))

                }

            </ScrollView>
        </View>
    )
}

export default Carousel