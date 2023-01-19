const path = require("path");
const textParser = require("../handlers/parse.handlers");

class UploadController {
  async textFileUploader(req, res) {
    try {
      console.log(req);
      const { file } = req.files;

      await file.mv(path.resolve(__dirname, "..", "static", `${file.name}`));
      await textParser(file.name);
      res.json({ message: "users created" });
    } catch (e) {
      console.log(e.message);
    }
  }
}

module.exports = new UploadController();
