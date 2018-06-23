const router = require("express").Router();
const articleController = require("../../controller/articleController");

router
  .route("/")
  .get(articleController.findAll)
  .post(articleController.create);

router.route("/:id").delete(articleController.deleteArticle);
module.exports = router;
