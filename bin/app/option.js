const express = require('express').Router;
const optionHandlers = require('../modules/handlers/handlers');
const app = new express();

app.post('/add', async (req , res) => {
  await optionHandlers.addOption(req, res)
});
app.get('/get')
app.put('/update')
app.delete('/delete')

module.exports = app;