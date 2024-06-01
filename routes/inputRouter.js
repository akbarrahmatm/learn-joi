const router = require("express").Router();

const inputController = require("../controllers/inputController");

const { validateInput } = require("../utils/validation/schema");

router.post("/input", inputController.createInput);

module.exports = router;
