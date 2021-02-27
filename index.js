const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

app.use(bodyParser.json())



const whatsapp = require('./whats');

app.post('/whatsapp/connect', whatsapp.conectApi);
app.post('/whatsapp/sendmessage', whatsapp.sendMessage);

app.listen(3001, () => {
    console.log('conectado')
})