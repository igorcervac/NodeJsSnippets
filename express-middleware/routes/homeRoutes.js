const express = require('express');
const { home_index, home_about } = require('../controllers/homeController');

const router = express.Router();

router.get('/index', home_index);
router.get('/about', home_about);

module.exports = router;