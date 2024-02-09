import { View, Text, Button, FlatList } from 'react-native'
import React from 'react'
import useDataFetch from '../../Hooks/UseDataFetch'

const Carousel = () => {

    const { houses, loading } = useDataFetch("https://estateapi.onrender.com/api/products/")

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

            {
                houses &&
                houses.map(({ _id, image, title, price }) => (
                    <div key={_id}>
                        <img src={image} alt={title} />
                        <h2>{title}</h2>
                        <p>Price: ${price}</p>
                    </div>
                ))

            }

        </View>
    )
}

export default Carousel