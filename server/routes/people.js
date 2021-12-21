var express = require('express');
var router = express.Router();

const axios = require('axios');

/* GET people listing with ID. */
router.get('/:id', async function(req, res, next) {
  try {
    const url = `https://swapi.dev/api/people/${req.params.id}`;
    let response = await axios.get(url);
    const personData = response.data
    
    res.status(200).send(personData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
