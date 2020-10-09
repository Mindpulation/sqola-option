const joi = require('joi');

const addOption = joi.object({
  type : joi.string().required(),
  name : joi.array().required()
});

const updateOption = joi.object({
  type : joi.string().required(),
  name : joi.array().required()
});

const deleteOption = joi.object({
  type : joi.string().require()
});

module.exports = {
  addOption,
  updateOption,
  deleteOption
}