require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDB = async()=> {
    try{

        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`data base has been connected: ${conn.connection.host}`)
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB; 