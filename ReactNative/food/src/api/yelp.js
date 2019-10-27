import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorizations:
      "Bearer FETF52hmD4eFZ8EE4nIU8cpOsKU_muY6xjQvOeW7pz8Ll4Jc9nxMnwqjE9ESO3KWQyRXG0edjT5AaChpEOJ57x73Zs-iD70-cd5YPoZ_wcP-S1qEM2xCJh0JoJOwXXYx      "
  }
});
