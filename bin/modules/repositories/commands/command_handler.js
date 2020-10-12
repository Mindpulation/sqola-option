const command = require('./command');

const addDataOption = (loadDataAdd) => {
  return command.addOption(loadDataAdd)
}

const updateDataOption = (loadDataUpdate) => {
  return command.updateOption(loadDataUpdate)
}

const findDataOption = (loadDataFind) => {
  return command.findOption(loadDataFind)
}

module.exports = {
  addDataOption,
  updateDataOption,
  findDataOption,
}