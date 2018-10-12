const express = require('express');

const { getEvents, getEventsByType } = require('../controllers/api.js');
const getData = require('../middlewares/get-data.js');

const router = express.Router();

router.use(getData);

router.get('/events', getEvents);

router.post('/events', getEventsByType);

module.exports = router;
