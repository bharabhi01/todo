const express = require('express');
const router = express.Router();
const { addtask, viewtask } = require('../controller/todo');

router.post('/addtask', addtask);
router.get('/viewtask', viewtask);

module.exports = router;