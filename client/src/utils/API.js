import axios from "axios";

export default {
  search: function() {
    return axios.get("/search/new-search");
  },
};
