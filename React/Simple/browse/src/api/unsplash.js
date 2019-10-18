import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4e64ee63fbf341567bd7b7fb48095154eb34d3ee821cd1e60df68401a296ee66"
  }
});
