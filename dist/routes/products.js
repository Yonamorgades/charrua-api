"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = express_1.Router();
const product_controller_1 = require("../controller/product.controller");
//RETURN ALL PRODUCTS ON DATA BASE
router.get('/product', product_controller_1.getProducts);
//MAKE A NEW PRODUCT ON DATABASE
router.post('/product', passport_1.default.authenticate('jwt', { session: false }), product_controller_1.addProduct);
router.delete('/product/', passport_1.default.authenticate('jwt', { session: false }), product_controller_1.deleteProduct);
router.put('/product/', passport_1.default.authenticate('jwt', { session: false }), product_controller_1.editProduct);
exports.default = router;
