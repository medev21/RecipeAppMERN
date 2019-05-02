const express = require('express');
const router = express.Router();

router.get("/api/", (request, response) => {
    return response.status(200).json({message: 'hello world'});
});

module.exports = router;