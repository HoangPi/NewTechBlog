const express = require('express');
const router = express.Router();
const {addComment} = require("../controllers/postHandler.js")

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/:id/:comment',addComment);

module.exports = router;