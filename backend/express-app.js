const express = require("express");
const authAPI = require("./api/auth");

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  authAPI(app);
};
