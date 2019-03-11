import axios from "axios";
const KEY = "AIzaSyChgp-9BCulemoovadJdr3L9Vo5RGtuJo8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxresult: 5,
    key: KEY
  }
});
