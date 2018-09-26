var express = require('express');
var load = require('consign');
var bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    load()
        .include('routes')
        .into(app);
    return app;
}