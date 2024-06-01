const Joi = require("joi");

const validateInput = async (input) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(input);
};

module.exports = {
  validateInput,
};
