const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({


    title: {
        type: String,
        required: true,
        unique: true
    },

    excerpt: {
        type: String,
        requred: true
    },

    userId: {
        type: ObjectId,
        required: true,
        ref: 'createUser'
    },

    ISBN: {
        type: String,
        required: true,
        unique: true
    },

    category: {
        type: String,
        required: true
    },

    subcategory: [{
        type: String,
        required: true
    }],

    reviews: {
        type: Number,
        default: 0,
        comment: Number
    },
    deletedAt: {
        type: Date
    },

    isDeleted: {
        type: Boolean,
        default: false
    },

    releasedAt: {
        type: Date,
        required: true,
        // default:Date.now(),

    }


}, { timestamps: true })


module.exports = mongoose.model('createBook', bookSchema)