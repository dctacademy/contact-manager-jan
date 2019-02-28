const mongoose = require('mongoose')

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://aniruddha:secret123@cluster0-shard-00-00-kvmls.mongodb.net:27017,cluster0-shard-00-01-kvmls.mongodb.net:27017,cluster0-shard-00-02-kvmls.mongodb.net:27017/contact-manager-2?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true' 

// DB Confirguration 
mongoose.Promise = global.Promise
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true })
    .then(function () {
        console.log('connected to db')
    })
    .catch(function () {
        console.log('OOPS!!! Something went wrong in DB Connection')
    })


module.exports = {
    mongoose
}