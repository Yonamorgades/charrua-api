import {Request, Response} from 'express';
import User,{IUser}from '../models/user';
import jwt from 'jsonwebtoken';

import config from '../config/config'
// Generate token 
function createToken(user : IUser){
    return jwt.sign({id:user.id,email:user.email},config.jwtSecret,{expiresIn:86400})
}

//Function to register new user
export const signup = async (req : Request, res: Response):Promise <Response> => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg : 'Please.send your email and password'})
    }
    const user = await User.findOne({email:req.body.email})
    if(user){
        res.status(400).json({msg:'The user already exists'})
    }
    const newUser = new User(req.body)
    await newUser.save();
    return res.status(201).json(newUser)
}



export const signIn = async (req : Request, res: Response) => {
    //validate body structure
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg : 'Please.send your email and password'});
    }
    //match user by email
    const findedUser = await User.findOne({email : req.body.email})
    if(!findedUser){
        return res.status(400).json({msg : 'The user does not exists'});
    }  
    const isMatch = await findedUser.comparePassword(req.body.password)
    if(isMatch){
        return res.status(200).json({token : createToken(findedUser)})
    }
    res.status(400).json({msg:'The mail or the password are incorrect'})
}   