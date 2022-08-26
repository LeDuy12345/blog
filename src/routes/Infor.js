const express = require('express'); //shift+alt
const router = express.Router();
const inforcontroller = require('../app/controllers/Inforcontroller');

router.use('/more', inforcontroller.more);
router.use('/', inforcontroller.index);

module.exports = router;
