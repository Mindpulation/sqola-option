const command = require('./command');

const addDataOption = (loadDataAdd) => {
  return command.addOption(loadDataAdd)
}

module.exports = {
  addDataOption,
}