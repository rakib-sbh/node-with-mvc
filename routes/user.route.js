const router = require("express").Router();
const {
  rootController,
  userPostController,
  userGetController,
} = require("../controllers/user.controller");

router.get("/", rootController);
router.post("/users", userPostController);
router.get("/users", userGetController);

module.exports = router;
