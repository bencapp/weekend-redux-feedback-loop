const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
  console.log("Receiving POST request");
  const queryText = `INSERT INTO feedback (feeling, understanding, support, comments)
                    VALUES ($1, $2, $3, $4)`;
  const queryParams = [
    req.body.feeling,
    req.body.understanding,
    req.body.support,
    req.body.comments,
  ];
  pool
    .query(queryText, queryParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log("Error making SQL query", queryText, " : ", err);
      res.sendStatus(500);
    });
});

module.exports = router;
