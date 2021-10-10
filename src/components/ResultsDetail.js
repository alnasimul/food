import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ResultsDetail = ({result}) => {
    const {name, rating, review_count} = result;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.name}>{name}</Text>
            <Text><AntDesign name="star"/> {rating} Stars, <FontAwesome name='comments'/> {review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 190,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
})

export default ResultsDetail;