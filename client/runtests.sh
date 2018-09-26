node client localhost 8542 listaccs
node client localhost 8542 deposito 1 500
node client localhost 8542 deposito 2 550
node client localhost 8542 deposito 0 200
node client localhost 8542 listaccs
node client localhost 8542 saque 1 500
node client localhost 8542 saque 2 550
node client localhost 8542 saque 0 200
node client localhost 8542 listaccs
node client localhost 8542 transferencia 1 9 500
node client localhost 8542 transferencia 2 9 550
node client localhost 8542 transferencia 0 9 200
node client localhost 8542 listaccs
node client localhost 8542 saldo 9
chmod +x runtests.sh