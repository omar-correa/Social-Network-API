const express = require("express");
const router = express.Router();
// const User = require("../models/User");

// module.exports = {
//   getUsers(req, res) {
//     User.find()
//       .then((users) => res.json(users))
//       .catch((err) => res.status(500).json(err));
//   },

//   getUserById(req,res){
//     User.findone({_id: req.params.userId})
//     .select('__v')
//   }
// };

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../Controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
