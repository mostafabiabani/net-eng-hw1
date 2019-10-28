// express and routes init
const express = require('express');
const test_point_router = require('./routes/testpoint').router;
const add_polygon_router = require('./routes/addpolygon').router;
const app = express();

// read from file
const path = require('path');
const file_system = require('fs');
const app_directory = path.dirname(require.main.filename);
const file = path.join(app_directory, 'data/polygons.json');
var polygonjson = '';
file_system.readFile(file, (error, data) => {
    if(!error) {
        polygonjson = JSON.parse(data);
    }
});

// body-parser for request.body
const body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

function getPolygonJson() {
    return polygonjson;
}
function setPolygonJson(value) {
    polygonjson = value;
}
module.exports.getPolygonJson = getPolygonJson;
module.exports.setPolygonJson = setPolygonJson;
app.use(test_point_router);
app.use(add_polygon_router);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
// app.listen(3000);
