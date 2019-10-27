import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");

  //Yelp Search API
  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErr("Something Went Wrong");
    }
  };

  //Call Search Components When Rendered
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, err];
};
