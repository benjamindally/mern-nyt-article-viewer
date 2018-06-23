import axios from "axios";

export default {
  viewSaved: function() {
    return axios.get("/api/articles");
  },

  saveArticle: function(articleData) {
    console.log(articleData);

    return axios.post("/api/articles", articleData);
  },

  deleteArticle: function(id) {
    return axios.delete("api/articles/" + id);
  },
};
