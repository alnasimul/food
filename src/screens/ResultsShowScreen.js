import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);  
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data);
  };
  useEffect(() => {
      getResult(id)
  }, []);

  if(!result){
      return null;
  }
  return (
    <View>
      <Text style={styles.text}>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
           return <Image style={styles.image} source={{uri: item}}/>
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 17
    },
    image: {
        width: 250,
        height: 200,
        borderRadius: 5,
        alignSelf: 'center',
        margin: 10
    }
});
export default ResultsShowScreen;
