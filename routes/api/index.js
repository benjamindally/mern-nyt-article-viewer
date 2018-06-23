const router = require("express").Router();
const articleRoutes = require("./articles");

// Articleroutes
router.use("/articles", articleRoutes);

module.exports = router;
