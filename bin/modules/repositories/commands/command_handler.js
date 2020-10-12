const command = require('./command');

const addDataOption = (loadDataAdd) => {
  return command.addOption(loadDataAdd)
}

const updateDataOption = (loadDataOption) => {
  return command.updateOption(loadDataOption)
}

module.exports = {
  addDataOption,
  updateDataOption,
}