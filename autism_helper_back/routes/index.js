const express = require("express");
const app = express.Router();
const api = require("../controller/api");

app.post("/register", api.register);
app.post("/submit_answer/:user_id", api.submit_answer);

module.exports = app;
