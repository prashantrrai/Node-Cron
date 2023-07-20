const express = require('express')
const app = express()
const port = 3000
var cron = require('node-cron');

app.get('/', (req, res) => res.send('Hello World!'))

cron.schedule('*/1 * * * * *', () => {
    console.log('running a task every second');
  });

app.listen((port), () => console.log(`Example app listening on port http://localhost:${port}!`))