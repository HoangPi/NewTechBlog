const express = require('express');
const router = express.Router();
const {deletePost} = require("../controllers/postHandler.js")

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/:id',deletePost);

module.exports = router;