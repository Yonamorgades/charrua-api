import {Request, Response} from 'express';
import config from '../config/config'
import Product,{IProduct}from '../models/product';
import mongoose from 'mongoose'

// RETURN THE DATABASE PRODUCTS LIST
export const getProducts = async (req : Request, res: Response) => {
    const products = await Product.find({})
    if(products.length > 0 ){
        return res.status(201).json(products)
    }
    return res.status(400).json({msg : 'No find products'})
}


//ADD A NEW PRODUCT TO THE DATA BASE
export const addProduct = async (req : Request, res: Response) => {
    if(!req.body.name || !req.body.description || !req.body.category || !req.body.price || !req.body.ingredients){
        return res.status(400).json({msg : 'The format is not correct'})
    }
    const product = await Product.findOne({name:req.body.name})
    if(product){
        res.status(400).json({msg:'The product already exists'})
    }
    const newProduct = new Product(req.body)
    await newProduct.save();
    return res.status(201).json(newProduct)
}   

export const deleteProduct = async (req : Request, res : Response) => {
    if(!req.params.id){
        res.status(400).json({msg:'the product key is required'})
     }
    const product = await Product.findOneAndDelete({ _id: req.params.id })
    res.send(req.params.id)
}