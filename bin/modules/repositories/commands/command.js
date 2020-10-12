const config = require ('config');
const { Delete } = require('mongooo');
const Mongo = require('mongooo').Mongooo;
const { save } = require('mongooo').Save;
const { set } = require('mongooo').Update;
const { find, findOne } = require('mongooo').Find;
const { del } = require('mongooo').Delete;

const mongo = new Mongo();

let con;
(async () => {
  con = await mongo.setup(config.get('MongoUrl'),config.get('MongoDB'),config.get('MongoCol'));
})();

const addOption = async (loadData) => {
  const result = {
    "err" : true,
    "message" : "Failed to add"
  };
  try{

    const findType = await findOne(con, {"type" : loadData.data.type});
    if(findType !== null){
      result.err = true,
      result.message = "Can't create same type twice"
    }else{
      const dbResult = await save(con, loadData.data)
      if(dbResult == false){
        result.err = true,
        result.message = "Failed to add new option"
      }else{
        result.err = false,
        result.message = "Success to add new option"
      }
    }

  }catch (e) {
    result.err = true,
    result.message = "Something went wrong"
  }
  return result;
}


const updateOption = async (loadData) => {
  const result = {
    "err" : true,
    "message" : "Failed to update"
  };
  try{
    const loadDatas = (loadData) =>{
      delete loadData.data.findType
      const data = {
        ...loadData.data,
      }
      return data;
    }
    const dbResult = await set(con, {"type": loadData.data.findType}, loadDatas(loadData));
    if(dbResult == false){
      result.err = true,
      result.message = "Failed to update option"
    }else{
      result.err = false,
      result.message = "Success to update option"
    }
    
  }catch (e) {
    result.err = true,
    result.message = "Something went wrong"
  }
  return result;
}

const findOption = async (loadData) => {
  const result = {
    "err" : true,
    "message" : "Failed to find option data"
  };
  try{
  
    const dbResult = await find(con, loadData.data, {})
    if(dbResult == false){
      result.err = true,
      result.message = "Data not found"
    }else{
      result.err = false,
      result.message = dbResult;
    }
  
  }catch (e) {
    result.err = true,
    result.message = "Something went wrong"
  }
  return result;
}

const removeOption = async (loadData) => {
  const result = {
    "err" : true,
    "message" : "Failed to delete data option"
  };
  try{
  
    const dbResult = await del(con, loadData.data)
    if(dbResult == false){
      result.err = true,
      result.message = "Data not found"
    }else{
      result.err = false,
      result.message = "succes delete data option ", loadData.data;
    }
  
  }catch (e) {
    result.err = true,
    result.message = "Something went wrong"
  }
  return result;
}

module.exports = {
  addOption,
  updateOption,
  findOption,
  removeOption
}