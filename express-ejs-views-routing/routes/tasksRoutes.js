const express = require('express');
const { tasks_get, tasks_post, tasks_put, tasks_delete } = require('../controllers/tasksController');

const router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/', tasks_get);

router.post('/', tasks_post);

router.put('/:id', tasks_put);

router.delete('/:id', tasks_delete);

module.exports = router;

