const request = require('request-promise')

let host = process.argv[2]
let port = process.argv[3]
let operationType = process.argv[4]

let ope = {
    deposito: function () {
        let id = process.argv[5]
        let amount = process.argv[6]
        return {
            operation: `${id}/${amount}`,
            httpmethod: 'POST'
        }
    },
    saque: function () {
        let id = process.argv[5]
        let amount = process.argv[6]
        return {
            operation: `${id}/${amount}`,
            httpmethod: 'POST'
        }
    },
    transferencia: function () {
        let origin = process.argv[5]
        let target = process.argv[6]
        let amount = process.argv[7]
        return {
            operation: `${origin}/${target}/${amount}`,
            httpmethod: 'PUT'
        }
    },
    saldo: function () {
        let id = process.argv[5]
        return {
            operation: `${operationType}/${id}`,
            httpmethod: 'GET'
        }
    },
    listaccs: function () {
        return {
            operation: `${operationType}`,
            httpmethod: 'GET'
        }
    }
}

if (ope[operationType]) {
    let confs = ope[operationType]()
    const options = {
        method: confs.httpmethod,
        uri: `http://${host}:${port}/${confs.operation}`,
        body: {
            action: operationType
        },
        json: true
    }
    console.log(options.uri)
    request(options)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (err) {
            console.log('Erro de request ' + err)
        })
} else {
    console.log('Operação inválida')
}


