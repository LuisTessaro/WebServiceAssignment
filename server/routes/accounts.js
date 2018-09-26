module.exports = function (app) {
  let accounts = [10]
  for (let i = 0; i < 10; i++) {
    accounts[i] = 1000
  }
  console.log('10 accounts created with 1000 balance')

  app.put('/deposito/:id/:amount', function (req, res) {
    accounts[req.params.id] += parseInt(req.params.amount)
    res.send(req.params.id + ' new balance: ' + accounts[req.params.id])
  })

  app.put('/saque/:id/:amount', function (req, res) {
    accounts[req.params.id] -= parseInt(req.params.amount)
    res.send(req.params.id + ' new balance: ' + accounts[req.params.id])
  })

  app.put('/transferencia/:id_origin/:id_target/:amount', function (req, res) {
    accounts[req.params.id_origin] -= parseInt(req.params.amount)
    accounts[req.params.id_target] += parseInt(req.params.amount)
    res.send(
      req.params.id_origin + ' new balance: ' + accounts[req.params.id_origin] + '\n' + 
      req.params.id_target + ' new balance: ' + accounts[req.params.id_target])
  })

  app.get('/saldo/:id', function (req, res) {
    res.send(req.params.id + ' balance: ' + accounts[req.params.id])
  })

  app.get('/listaccs', function (req, res) {
    let accs = ''
    for (let i = 0; i < 10; i++) {
      accs += i + ': ' + accounts[i] + '\n'
    }
    res.send(accs)
  })

}