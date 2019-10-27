import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 230,
    height: 120,
    borderRadius: 4
  },
  name: {
    fontWeight: "bold"
  }
});

export default ResultsDetail;
