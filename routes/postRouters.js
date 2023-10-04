const express = require('express');
const router = express.Router();
const {postHandler} = require("../controllers/postHandler.js")

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/:post',postHandler);

module.exports = router;