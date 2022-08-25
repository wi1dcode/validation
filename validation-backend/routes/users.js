const express = require("express")
const app = express()
const users = require("../users")
const { verify } = require("../middlewares/verify")

app.get("/", (req, res) => {
  res.json(users)
})

app.get("/:slug", verify, (req, res) => {
  res.json(req.users)
})

module.exports = app
