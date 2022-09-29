import express from "express";

let getHomePage = (req, res) => {
  return res.send("Hello my name is Phat");
};

module.exports = {
  getHomePage,
};
