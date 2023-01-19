const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");
const uploadController = require("../controllers/upload.controller");

router.post("/createuser", userController.createUser);
router.get("/getusers", userController.getUsers);
router.get("/getusersonline", userController.getUsersOnline);
router.delete("/deleteusers", userController.deleteUsers);
router.post("/uploadtextfile", uploadController.textFileUploader);

module.exports = router;
