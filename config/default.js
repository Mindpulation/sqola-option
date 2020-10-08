require('dotenv').config()

module.exports = {
  optionEndpoint : process.env.endpoint,
  MongoUrl : process.env.MONGO_URL,
  MongoDB : process.env.MONGO_DB,
  MongoCol : process.env.MONGO_COL,
  ports : process.env.PORT
}