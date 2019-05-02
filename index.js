let mongoose = require ('mongoose');

let config = require("config")

let app = require('./src/app')

let PORT = process.env.PORT || config.get('PORT')
let HOST = process.env.HOST || config.get('HOST')

let MONGO_PATH = process.env.MONGO_PATH || config.get("MONGO_PATH")
let MONGO_PORT = process.env.MONGO_PORT || config.get("MONGO_PORT")

mongoose.connect(`mongodb://${MONGO_PATH}:${MONGO_PORT}/todos`,{
    useNewUrlParser: true,
    useFindAndModify:false
})
app.listen(PORT, HOST, () =>{
    console.log(`Server is running...`);
})