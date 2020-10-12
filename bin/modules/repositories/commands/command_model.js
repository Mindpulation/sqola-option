const joi = require('joi');

const addData = joi.object({
  type : joi.string().required(),
  name : joi.array().required()
});

const updateData = joi.object({
  type : joi.string().required(),
  name : joi.array().required()
});

const deleteData = joi.object({
  type : joi.string().required()
});

module.exports = {
  addData,
  updateData,
  deleteData
}