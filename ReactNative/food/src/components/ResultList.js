import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultList = props => {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <View>
              <ResultsDetail result={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5
  }
});

export default ResultList;
