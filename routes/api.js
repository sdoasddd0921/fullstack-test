const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log('get test request success!');
  res.send({type:'GET'});
});

module.exports = router;
