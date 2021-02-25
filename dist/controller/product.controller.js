"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.addProduct = exports.getProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
// RETURN THE DATABASE PRODUCTS LIST
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({});
    if (products.length > 0) {
        return res.status(201).json(products);
    }
    return res.status(400).json({ msg: 'No find products' });
});
exports.getProducts = getProducts;
//ADD A NEW PRODUCT TO THE DATA BASE
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.name || !req.body.description || !req.body.category || !req.body.price || !req.body.ingredients) {
        return res.status(400).json({ msg: 'The format is not correct' });
    }
    const product = yield product_1.default.findOne({ name: req.body.name });
    if (product) {
        res.status(400).json({ msg: 'The product already exists' });
    }
    const newProduct = new product_1.default(req.body);
    yield newProduct.save();
    return res.status(201).json(newProduct);
});
exports.addProduct = addProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).json({ msg: 'the product key is required' });
    }
    const product = yield product_1.default.findOneAndDelete({ _id: req.params.id });
    res.send(req.params.id);
});
exports.deleteProduct = deleteProduct;
