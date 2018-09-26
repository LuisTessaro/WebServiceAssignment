var express = require('express')

var app = require('./config/config')()
let port = process.argv[2] || 8542

app.listen(port, function () {
    console.log('server running on port '+ port)
})