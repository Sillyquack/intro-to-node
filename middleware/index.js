const { ExpressValidator } = require("express-validator");

ExpressValidator.prototype.validate = function (req, res, next) {
  const errors = this.validationErrors();
  if (errors) {
    return res.status(400).json({ errors });
  }
  next();
};

module.exports = ExpressValidator;
