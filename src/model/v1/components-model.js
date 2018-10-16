'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Types = Schema.Types;

let Components = new Schema({
    screenOrder: {
        type: Types.Number
    },
    locale: {
        type: Types.String,
        lowercase: true
    },
    title: {
        type: Types.String
    },
    component: {
        type: Types.String
    },
    lang: {
        type: Types.String
    }
});

module.exports = mongoose.model('component', Components);