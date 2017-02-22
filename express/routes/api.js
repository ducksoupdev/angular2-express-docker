const express = require('express');
const router = express.Router();

/* GET components listing. */
router.get('/', (req, res, next) => {
  res.json([]);
});

module.exports = router;
