import express, { response } from "express";
import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll(); // tim tat ca du lieu trong bang user
    return res.render("homePage.ejs");
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.redirect("get-crud");
};

let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  return res.render("getCRUD.ejs", { dataTable: data });
};

let getUpdateCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let userData = await CRUDService.getUpadateUserInfo(userId);
    console.log(userData);
    return res.render("editCRUD.ejs", {
      editUser: userData,
    });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let dataEdit = req.body;
  await CRUDService.updateUserInfo(dataEdit);
  return res.redirect("/get-crud");
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.redirect("/get-crud");
  } else {
    return res.send("delete failed!!");
  }
};

module.exports = {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getUpdateCRUD,
  putCRUD,
  deleteCRUD,
};
