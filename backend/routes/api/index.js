// backend/routes/api/index.js
const router = require('express').Router();

module.exports = router;

//* All the URLs of the routes in the api router will be prefixed with /api.

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });
  




