import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hasdUserPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hasdUserPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
        phoneNumber: data.phoneNumber,
      });
      resolve("success create new users");
    } catch (e) {
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let getUpadateUserInfo = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });

      if (user) {
        resolve(user);
      } else {
        resolve([]);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUserInfo = (dataEdit) => {
  console.log("data from service: ", dataEdit);
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: dataEdit.id },
      });

      if (user) {
        user.firstName = dataEdit.firstName;
        user.lastName = dataEdit.lastName;
        user.address = dataEdit.address;

        await user.save();
        resolve();
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};

let deleteUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let deleteUser = await db.User.findOne({
        where: { id: userId },
      });

      if (deleteUser) {
        await db.User.destroy({
          where: { id: userId },
        });
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUpadateUserInfo,
  updateUserInfo,
  deleteUserById,
};
