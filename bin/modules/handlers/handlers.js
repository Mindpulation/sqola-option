const wrapper = require('../../helpers/utils/wrapper');
const validator = require('../../helpers/utils/validator');
const { addData } = require('../repositories/commands/command_model');
const { addDataOption } = require('../repositories/commands/command_handler');

const addOption = async (req , res) => {

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

module.exports = {
  addOption,
}