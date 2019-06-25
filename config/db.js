const mongoose = require("mongoose");
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            user: 'testuser',
            pass: 'password',
            });

        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;