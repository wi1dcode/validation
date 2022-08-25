const express = require("express")
const app = express()
const users = require("../users")
var slugify = require("slugify")
const { body, validationResult } = require("express-validator")
const { verify } = require("../middlewares/verify")

app.get("/", (req, res) => {
  res.json(users)
})

app.get("/:slug", verify, (req, res) => {
  res.json(req.users)
})

app.post(
  "/",
  body("name").isLength({ min: 4 }).withMessage("Name is too short"),
  body("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("Password must contain minimum 8 characters"),
  body("email").exists().isEmail().withMessage("Email is invalid"),
  body("city")
    .exists()
    .isIn(["Paris", "Tokyo", "Los Angeles"])
    .withMessage("Request denien. Allowed cities: Paris, Tokyo, Los Angeles"),
  body("profile_picture").if(
    (profile_picture, { req }) => req.body.profile_picture
  ),
  (req, res) => {
    const { errors } = validationResult(req)

    if (errors.length > 0) {
      res.status(400).json(errors)
    } else {
      const newUser = {
        ...req.body,
        slug: slugify(req.body.name, { lower: true }),
      }
      users.push(newUser)
      res.status(201).json(newUser)
    }
  }
)

module.exports = app
