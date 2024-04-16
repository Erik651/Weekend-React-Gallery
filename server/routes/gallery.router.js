const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  let queryText = `
  UPDATE "gallery" SET "likes" = "likes" +1  WHERE "id" = $1;
  `;
  pool
    .query(queryText, [req.params.id])
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
  let queryText = `SELECT * FROM "gallery" ORDER BY "id" DESC;`;
  pool.query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log('ERROR in the GET route', error);
      res.sendStatus(500);
    });
});


// DELETE
router.delete('/:id', (req, res) => {
  console.log('req.params', req.params);
  let queryText = `DELETE FROM "gallery" WHERE "id" = $1;`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('ERROR in the DELETE /gallery/:id', error);
      res.sendStatus(500);
    });
});
module.exports = router;
