import { Text, View, Image } from 'react-native';
import React from 'react';
import { globalStyles } from '../styles/global'

export default function ItemDetails({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>{ navigation.getParam('product_name_fr') }</Text>
            <Text>{ navigation.getParam('rev') }/100</Text>
            <Image
                style={{
                    width: 200,
                    height: 200,
                }}
                source={{
                    uri: navigation.getParam('image_thumb_url'),
                }}
            />

            {
            navigation.getParam('quantity') ?
                <Text>Quantity: { navigation.getParam('quantity') }</Text>
            :
                null
            }
            <Text>Category: {navigation.getParam('categories')}</Text>
            <Text>Ingredients: {navigation.getParam('ingredients_text_fr')}</Text>

        </View>
      );
}