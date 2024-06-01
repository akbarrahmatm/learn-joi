const Joi = require("joi");

const inputValidation = Joi.object({
  name: Joi.string().min(3).required().label("Name"),
  email: Joi.string().email().required().label("Email"),
}).options({ abortEarly: false });

module.exports = {
  inputValidation,
};
