import { Text, View, FlatList, TouchableOpacity, Button, Image } from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../styles/global'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzas: false,
        };
    }

    componentDidMount() {
        return fetch('https://fr-en.openfoodfacts.org/category/pizzas/1.json')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    pizzas: json.products
                })
            })
            .catch((e) => {
                console.error(e);
            }
        )
    }

    scanPressHandler = () => {
        this.props.navigation.push('Scan');
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <Button title="Scan product" onPress={this.scanPressHandler} />
                <Text style={globalStyles.sectionTitle}>
                    History
                </Text>
                <FlatList
                    data={this.state.pizzas}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ItemDetails', item)}
                                style={globalStyles.itemListItemContainer}
                                >
                                <Text style={globalStyles.itemListTitle}>{ item.product_name_fr }</Text>
                                <Text style={globalStyles.itemListRating}>{ item.rev }/100</Text>
                                <Image
                                    style={globalStyles.itemListImage}
                                    source={{
                                        uri: item.image_thumb_url,
                                    }}
                                />
                            </TouchableOpacity>
                            <View style={globalStyles.itemListItemSeparator} />
                        </>
                    )}
                />
            </View>
        );
    }
}

export default Home;

// export default function Home({ navigation }) {
// console.log(navigation);

//     const items = [
//         {
//             key: '1',
//             title: "Jus d'orange",
//             rating: 77,
//         },
//         {
//             key: '2',
//             title: "La vache qui rit",
//             rating: 4,
//         },
//         {
//             key: '3',
//             title: "Surimi Coraya",
//             rating: 47,
//         },
//     ]

//     const scanPressHandler = () => {
//         navigation.push('Scan');
//     }

//     return (
//         <View style={globalStyles.container}>
//             <Button title="Scan product" onPress={scanPressHandler} />
//             <Text style={globalStyles.sectionTitle}>
//                 History
//             </Text>
//             <FlatList
//                 data={items}
//                 renderItem={({item}) => (
//                     <>
//                         <TouchableOpacity
//                             onPress={() => navigation.navigate('ItemDetails', item)}
//                             style={globalStyles.itemListItemContainer}
//                             >
//                             <Text style={globalStyles.itemListTitle}>{ item.title }</Text>
//                             <Text style={globalStyles.itemListRating}>{ item.rating }/100</Text>
//                         </TouchableOpacity>
//                         <View style={globalStyles.itemListItemSeparator} />
//                     </>
//                 )}
//             />
//         </View>
//     );
// }