const express = require('express').Router;
const optionHandlers = require('../modules/handlers/handlers');
const app = new express();

app.post('/create', async (req , res) => {
  await optionHandlers.createOption(req, res)
});

app.post('/get', async (req, res) => {
  await optionHandlers.findOption(req, res)
})

app.put('/update', async (req, res) => {
  await optionHandlers.updateOption(req, res)
});

app.delete('/delete', async (req, res) => {
  await optionHandlers.deleteOption(req, res)
})

module.exports = app;