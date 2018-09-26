var http = require('http');
//node client localhost 8542 saldo 1

let host = process.argv[2]
let port = process.argv[3]
let operationType = process.argv[4]

let ope = {
    deposito: function () {
        let id = process.argv[5]
        let amount = process.argv[6]
        operation = `${operationType}/${id}/${amount}`
        httpmethod = 'PUT'
    },
    saldo: function () {
        let id = process.argv[5]
        operation = `${operationType}/${id}`
        httpmethod = 'GET'
    },
    saque: function () {
        let id = process.argv[5]
        let amount = process.argv[6]
        operation = `${operationType}/${id}/${amount}`
        httpmethod = 'PUT'
    },
    transferencia: function () {
        let origin = process.argv[5]
        let target = process.argv[6]
        let amount = process.argv[7]
        operation = `${operationType}/${origin}/${target}/${amount}`
        httpmethod = 'PUT'
    },
    listaccs: function () {
        operation = `${operationType}`
        httpmethod = 'GET'
    }
}

if (ope[operationType]) {
    ope[operationType]()
}

let configs = {
    hostname: host,
    port: port,
    path: '/' + operation,
    method: httpmethod,
    headers: {
        'Accept': 'application/json'
    }
};

var req = http.request(configs, function (res) {
    console.log('STATUS: ' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('' + chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();