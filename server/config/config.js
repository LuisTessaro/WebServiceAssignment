var express = require('express');
var load = require('consign');

module.exports = function() {
    var app = express();

    load()
        .include('routes')
        .into(app);
    return app;
}