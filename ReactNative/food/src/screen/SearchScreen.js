import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, err] = useResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      ></SearchBar>
      <Text> Search Screen</Text>
      <Text> {term}</Text>
      <Text> We have found : {results.length} restaurants</Text>
      <Text> {err}</Text>
    </View>
  );
};

export default SearchScreen;
