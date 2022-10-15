import userServiceApi from "../services/userServiceAPI";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter",
    });
  }

  let userData = await userServiceApi.handleUserLogin(email, password);
  console.log(userData);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  let id = req.query.id; //all, id
  let users = await userServiceApi.getAllUsers(id);
  if (!id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required parameter !!!",
      users: [],
    });
  }
  return res.status(200).json({
    errCode: 0,
    message: "ok",
    users,
  });
};

let handleCreateUsers = async (req, res) => {
  let createUser = await userServiceApi.createNewUser(req.body);
  console.log(createUser);
  return res.status(200).json({
    createUser,
  });
};

let handleUpdateUsers = async (req, res) => {
  let dataEdit = await userServiceApi.updateUserInfo(req.body);

  return res.status(200).json({
    dataEdit,
  });
};

let handleDeleteUsers = async (req, res) => {
  if (!req.body.id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing id",
    });
  }
  let userDelete = await userServiceApi.deleteUserbyId(req.body.id);
  return res.status(200).json({
    userDelete,
  });
};

// let handleGetAllCode = async (req, res) => {
//   try {
//     let data = await userServiceApi.getAllCodeService(req.query.type);
//     return res.status(200).json(data);
//   } catch (e) {
//     console.log("Get allcode error: ", e);
//     return res.status(200).json({
//       errCode: -1,
//       errMessage: "Error from server!!!",
//     });
//   }
// };

module.exports = {
  handleLogin,
  handleGetAllUsers,
  handleCreateUsers,
  handleUpdateUsers,
  handleDeleteUsers,
  // handleGetAllCode,
};
