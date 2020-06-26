import axios from "axios";

const KEY = "AIzaSyA67fEZI36aiSdHs2hn0oc5VISwPn-NWv0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
