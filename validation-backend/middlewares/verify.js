const users = require("../users")

const verify = (req, res, next) => {
  const { slug } = req.params
  const user = users.find((users) => users.slug === slug)

  if (user) {
    req.users = user
    next()
  } else {
    res.status(404).json("User not found")
  }
}

module.exports = {
  verify,
}
