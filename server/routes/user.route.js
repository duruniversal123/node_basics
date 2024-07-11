const express = require("express");

const Router = express.Router();

const users=require("../data/users")

Router.get("/", function (req, res) {
  res.send({
    message: "hello all users, welcome to the root page !",
    status: 1,
  });
});

Router.get("/home", function (req, res) {
  res.send({
    message: "hello all users, welcome to the home page !",
    status: 1,
  });
});

//user email-send

const nodemailer = require("nodemailer");
Router.get("/user-email-send", function (req, res) {
  const transporter=nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    auth:{
        user:process.env.SMTP_USERNAME,
        pass:process.env.SMTP_PASSWORD
    }
  });
  const info=transporter.sendMail({
    from:process.env.SMTP_USERNAME,
    to:"ajay36659@gmail.com",
    subject:"Welcome Ajay",
    html:'<p>hello ajay</p>'
  });
  res.send({message:'message sent successfully',statu:1});



});

//get all users data request
Router.get("/api/get-users", function (req, res) {
  if (users.length > 0) {
    res.send({
      message: "Fetched all users successfully",
      status: 1,
      users: users,
    });
  } else
    res.send({
      message: "users not found",
      status: 1,
    });
});

//get specific user by id data request
Router.get("/api/user/:id", function (req, res) {
  const id = req.params.id;
  console.log("id", id);
  if (users.length > 0) {
    const specificUser = users.filter((user) => {
      return user.id == id;
    });
    console.log("specificUser", specificUser);
    res.send({
      message: "Fetched all users successfully",
      status: 1,
      user: specificUser,
    });
  } else
    res.send({
      message: "users not found",
      status: 1,
    });
});

Router.post("/register", function (req, res) {
  console.log("req.body", req.body);
  const { name, email, password, role } = req.body;
  res.send({
    message: "user registration successfully",
    status: 1,
    name: name,
    email: email,
    password: password,
    role: role,
  });
});
Router.post("/login", function (req, res) {
  console.log("req.body", req.body);
  const { email, password } = req.body;
  if (email && password) {
    res.send({
      message: "user login successfully",
      status: 1,
      email: email,
      password: password,
    });
  } else {
    res.send({ message: "user login failed", status: 0 });
  }
});

module.exports = Router;
