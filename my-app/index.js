const express = require('express');
const server = express();
const frases = require('./data/frases.json');

server.get('/frases', (req,res) => {
    return res.json(frases)
})

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
})