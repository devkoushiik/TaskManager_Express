const mongoose = require('mongoose')

async function connectDB(URI){
    return mongoose.connect(URI,{
        useNewUrlParser: true,useCreateIndex:true,useFindAndModify: false,useUnifiedTopology: true
    }).then(()=>console.log('CONNECTED TO THE DATABASE')).catch(err=>console.log(err));
}

module.exports = connectDB;
