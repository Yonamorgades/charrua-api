"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },
    ingredients: {
        type: [String],
        required: true,
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
});
exports.default = mongoose_1.model("products", productSchema);
