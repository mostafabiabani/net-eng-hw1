var app = require('../app.js');
const express = require('express');
const router = express.Router();

router.post('/addpolygon', (request, response, next) => {
    var new_polygons = request.body;
    var polygons = app.getPolygonJson();
    console.log(JSON.stringify(app.getPolygonJson()) + ' \n\n\n\n');
    console.log(JSON.stringify(new_polygons) + '\n\n\n\n');
    polygons.features.push(new_polygons.features);
    app.setPolygonJson(polygons);
    console.log(JSON.stringify(app.getPolygonJson()));
    response.send("done.");
});
module.exports.router = router;
