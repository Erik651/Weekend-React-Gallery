const express = require('express');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  let queryText = `
  UPDATE "gallery" SET "likes" = "likes" +1  WHERE "id" = $1;
  `;
  Pool.query(queryText, [req.params.id])
  .then(() => {
    res.sendStatus(200);
  })
  .catch((error) => {
    console.log('ERROR in the PUT /like/:id', error);
    res.sendStatus(500);
  });
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
