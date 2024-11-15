const router = require("express").Router();
const { getName } = require("../controllers/Name.js");
const { getHobby } = require("../controllers/Hobby.js");
const { getDream } = require("../controllers/Dream.js");

router.get("/name", getName);
router.get("/hobby", getHobby);
router.get("/dream", getDream)

module.exports = router;