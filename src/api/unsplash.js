import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID X9Ush3MIhVHDtwqAxa13VW0ikVsZOtqvdmKtI2jPAHU",
  },
});
