import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, err] = useResults();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchApi(term);
        }}
      ></SearchBar>
      <Text> {term}</Text>
      <ScrollView>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice("$$$")} title="Bit Pricier" />
      </ScrollView>

      <Text> {err}</Text>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
