const { application } = require('express');
const express = require('express'); //shift+alt
const router = express.Router();
const searchcontroller = require('../app/controllers/Searchcontroller');

router.use('/', searchcontroller.index);

module.exports = router;
