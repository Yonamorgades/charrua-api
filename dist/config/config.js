"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'test',
    DB: {
        URI: process.env.MONGODB_URI || 'test',
        USER: process.env.MONGODB_USER || 'test',
        PASSWORD: process.env.MONGODB_PASS || 'test'
    }
};
