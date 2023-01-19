// const db = require("../db");
// const ApiError = require("../error/ApiError");
// const { where } = require("sequelize");
//
// class UserController {
//
//   async getOneUser(req, res, next) {
//     const id = req.query.id;
//     if (!id) {
//       return next(ApiError.badRequest("Не задан ID"));
//     }
//     const user = await db.query("SELECT * from users where id=$1", [id]);
//     res.json(user.rows[0]);
//   }
//   async updateUser(req, res) {
//     const { nickname, email, registered, status, id } = req.body;
//     let registeredDateArray = registered.split(".");
//     const registeredTimeStamp = new Date(
//       registeredDateArray[2],
//       registeredDateArray[1] - 1,
//       registeredDateArray[0]
//     ).getTime();
//     const user = await db.query(
//       "UPDATE users set nickname=$1, email=$2, registered=$3, status=$4 where id=$5 RETURNING *",
//       [nickname, email, registeredTimeStamp / 1000, status, id]
//     );
//     res.json(user.rows[0]);
//   }
//   async deleteUser(req, res) {
//     const id = req.query.id;
//     if (!id) {
//       return next(ApiError.badRequest("Не задан ID"));
//     }
//     const user = await db.query("DELETE from users where id=$1", [id]);
//     res.json(user.rows[0]);
//   }
// }
//
// async createUser(req, res) {
//   const { nickname, email, registered, status } = req.body;
//   let registeredDateArray = registered.split(".");
//   const registeredTimeStamp = new Date(
//     registeredDateArray[2],
//     registeredDateArray[1] - 1,
//     registeredDateArray[0]
//   ).getTime();
//   const newPerson = await db.query(
//     "INSERT INTO users (nickname, email, registered, status) values ($1, $2, $3, $4) RETURNING *",
//     [nickname, email, registeredTimeStamp / 1000, status]
//   );
//   res.json(newPerson);
// }
//
// module.exports = new UserController();
