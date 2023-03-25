const express = require('express');

const app = express();
const port = 7865;
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Welcome to the payment system');
})

app.get('/cart/:id([0-9]*)/', function (req, res) {
  id = req.params['id'];
  res.send(`Payment methods for cart ${id}`);
})

app.get('/available_payments', function(req, res) {
  res.send(JSON.stringify({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  }))
})

app.post('/login', function (req, res) {
  res.send(`Welcome ${req.body.userName}`);
})

app.listen(port, () => {
  console.log('API available on localhost port 7865');
})
