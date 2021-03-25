import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID SFDqU1pmNcfpkZk7UZS96VgFW-WBRektLNhavsFA0S4",
  },
});
