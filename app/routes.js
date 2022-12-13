const express = require('express');
const router = express.Router()

const api = require('./backend/api')
const { detailsModel } = require('./models/details')

router.get('/results', function(req, res) {
    const { searchString } = req.query
    const { results, total } = api.search(searchString)
    res.render('results', { 
        total,
        results,
        searchQuery: searchString
    });
});

router.get('/details', function(req, res) {
    res.render('details', detailsModel(req.query));
});

module.exports = router
