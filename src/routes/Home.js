const express = require('express'); //shift+alt
const Homecontroller = require('../app/controllers/Homecontroller');
const router = express.Router();

router.use('/', Homecontroller.index);

module.exports = router;
