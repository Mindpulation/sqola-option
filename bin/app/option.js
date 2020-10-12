const express = require('express').Router;
const optionHandlers = require('../modules/handlers/handlers');
const app = new express();

app.post('/create', async (req , res) => {
  await optionHandlers.createOption(req, res)
});

app.get('/get')

app.put('/update', async (req, res) => {
  await optionHandlers.updateOption(req, res)
});

app.delete('/delete')

module.exports = app;