const express = require('express');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
  let queryText = `SELECT * FROM "gallery";`;
  Pool.query(queryText)
  .then((result) => {
    res.send(results.rows);
  })
  .catch((error) => {
    console.log('ERROR in the GET route', error);
    res.sendStatus(500);
  })
});

module.exports = router;
