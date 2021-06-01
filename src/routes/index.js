const express = require('express');
const { NOTDATAOK } = require('../controllers/Controller');
const router = express.Router();

router.get('/', (req, res) => {
    NOTDATAOK(res, "Everything is working.");
});

module.exports = router;