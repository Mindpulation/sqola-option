const config = require ('config');
const Mongo = require('mongooo').Mongooo;
const { save } = require('mongooo').Save;
const { set } = require('mongooo').Update;
const { find } = require('mongooo').Find;
const { del } = require('mongooo').Delete;

const mongo = new Mongo();

let con;
(async () => {
  con = await mongo.setup(config.get('MongoUrl'),config.get('MongoDB'),config.get('MongoCol'));
})

const addOption = async (loadData) => {
  const result = {
    "err" : true,
    "message" : "Failed to add"
  };
  try{
      const dbResult = await save(con, loadData.data)
      if(dbResult == false){
          result.err = true,
          result.message = "Failed to add new option"
      }else{
          result.err = false,
          result.message = "Success to add new option"
      }
      
  }catch (e) {
      result.err = true,
      result.message = "Something went wrong"
  }
  return result;
}

const updateOption = async (loadData) => {
  

}

const findOption = async (laodData) => {

}

const removeOption = async (loadData) => {

}

module.exports = {
  addOption,
  updateOption,
  findOption,
  removeOption
}