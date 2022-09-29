import express from "express";
import db from "../models/index";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll(); // tim tat ca du lieu trong bang user

    console.log("================================================");
    console.log(data);
    console.log("================================================");
    return res.send("Hello my name is Phat");
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getHomePage,
};
