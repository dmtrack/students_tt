const csv = require("csv-parser");
const path = require("path");
const fs = require("fs");
const userController = require("../controllers/user.controller");

async function textParser(fileName) {
  const usersArray = [];
  await fs
    .createReadStream(path.resolve(__dirname, "..", "static", `${fileName}`))
    .pipe(csv({ separator: "," }))
    .on("data", (data) => usersArray.push(data))
    .on("end", () => {
      usersArray.forEach((result) => {
        userController.createUser(result);
      });
    });
}

module.exports = textParser;
