const ApiError = require("../utils/apiError");
const { inputValidation } = require("../utils/validation/validator");

const createInput = async (req, res, next) => {
  try {
    await inputValidation.validateAsync(req.body);

    res.status(200).json({
      status: "Success",
      message: "Success input data",
      data: req.body,
    });
  } catch (err) {
    if (err.isJoi === true) {
      res.status(422).json({
        status: "Failed",
        message: "Validation Error",
        errors: err.details,
      });
    } else {
      return next(new ApiError(err.message, 400));
    }
  }
};

module.exports = {
  createInput,
};
