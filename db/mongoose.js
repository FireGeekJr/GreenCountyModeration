const mongoose = require("mongoose")

module.exports = {
    init: () => {
        const dboptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };
        mongoose.connect(`mongodb+srv://FireBot:${process.env.PASS}@fbc.i8abj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise
        mongoose.connection.on(`connected`, () => { 
            console.log("Connected to DB.")
        })
        mongoose.connection.on(`disconnected`, () => { 
            console.log("Disconnected from DB.")
        })
        mongoose.connection.on(`err`, (err) => { 
            console.log("There was an error connecting to the db: " + err)
        })
    }
}