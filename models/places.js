const mongoose = require('mongoose')

const place_schema = new mongoose.Schema({
    name:     { type: String, required: true },
    pic:      { type: String, default: '/images/default_food.jpg' },
    cuisines: { type: String, required: true },
    city:     { type: String, default: 'Anytown' },
    state:    { type: String, default: 'USA' },
    founder:  Number,
})

module.exports = mongoose.model('place_schema', place_schema)