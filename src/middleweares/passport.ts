import {Strategy,ExtractJwt ,StrategyOptions} from 'passport-jwt'
import config from '../config/config';
import User from '../models/user';
const opts:StrategyOptions = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:config.jwtSecret
};
export default new Strategy(opts, async (payload, done)=> {
    const user = await User.findById(payload.id)
    try {
        if(user){
            return done(null,user);
        }
        else{
            return done(null,false);
        }
    } catch (error) {
        console.log(error)        
    }
})