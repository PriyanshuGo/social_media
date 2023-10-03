const express = require('express');
const controller = require("../controllers/controllers");
const router = express.Router();

// Define a GET route
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});


router.post('/signup-data',controller.signup);
router.post("/login-data",controller.login)

module.exports = router;
