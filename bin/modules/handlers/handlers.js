const wrapper = require('../../helpers/utils/wrapper');
const validator = require('../../helpers/utils/validator');
const { addData, updateData, findData } = require('../repositories/commands/command_model');
const { addDataOption, updateDataOption, findDataOption } = require('../repositories/commands/command_handler');

const createOption = async (req , res) => {

  const validate = validator.isValidPayload(req.body, addData);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    const output = await addDataOption(result);
    return output;
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
      : wrapper.response(res, 'success', result, result.message, 201);
  };
  sendResponse(await postRequest(validate));

}

const updateOption = async (req, res) => {

  const validate = validator.isValidPayload(req.body, updateData);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    const output = await updateDataOption(result);
    return output;
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
      : wrapper.response(res, 'success', result, result.message, 201);
  };
  sendResponse(await postRequest(validate));

}

const findOption = async (req, res) => {
  const validate = validator.isValidPayload(req.body, findData);
  const postRequest = async (result) => {
    if (result.err) {
      return result;
    }
    const output = await findDataOption(result);
    return output;
  };
  const sendResponse = async (result) => {
    (result.err) ? wrapper.response(res, 'fail', result, result.message, 400)
      : wrapper.response(res, 'success', result, result.message, 200);
  };
  sendResponse(await postRequest(validate));
}

module.exports = {
  createOption,
  updateOption,
  findOption,
}