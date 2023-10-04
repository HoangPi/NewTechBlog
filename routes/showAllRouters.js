const express = require('express');
const router = express.Router();
const {showAll} = require("../controllers/postHandler.js")

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/',showAll);

module.exports = router;