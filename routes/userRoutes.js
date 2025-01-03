const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
  createUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/signup").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(getUserDetails);

router.route("/password/update").put(updatePassword);

router.route("/me/update").put(updateProfile);

router
  .route("/admin/users")
  .get(getAllUser);

router
  .route("/admin/user/:id")
  .get(getSingleUser)
  .put(updateUserRole)
  .delete(deleteUser);

router
  .route("/admin/create/user")
  .post(createUser);

module.exports = router;
