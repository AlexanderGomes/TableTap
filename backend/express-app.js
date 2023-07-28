const express = require("express");
const authAPI = require("./api/auth");
const cartApi = require("./api/cart");
const paymentAPI = require("./api/payment");

module.exports = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  authAPI(app);
  cartApi(app);
  paymentAPI(app);
};
