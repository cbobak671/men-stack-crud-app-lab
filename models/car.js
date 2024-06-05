const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    makeModel: String,
    year: String,
    color: String,
    type: String,
    isReadyToPark: Boolean,
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;