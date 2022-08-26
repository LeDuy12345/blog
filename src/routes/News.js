const express = require('express'); //shift+alt
const router = express.Router();
const newscontroller = require('../app/controllers/Newscontroller');

router.use('/detail', newscontroller.show);
router.use('/', newscontroller.index); // mặc định phải đứng cuối

module.exports = router;
