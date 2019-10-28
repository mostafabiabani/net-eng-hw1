var app = require('../app.js');
const express = require('express');
const point_in_polygon = require('point-in-polygon');
const router = express.Router();

router.get('/testpoint', (request, response, next) => {
    let x = request.query.x;
    let y = request.query.y;
    let polygon_names = [];
    let polygons = app.getPolygonJson();
    polygons['features'].forEach(element => {
        if(element.geometry.type === 'Polygon') {
            if(point_in_polygon([x,y], element.geometry.coordinates[0])) {
                polygon_names.push(element.properties.name);
            }
        }
    });
    response.send(polygon_names);
});
module.exports.router = router;
