require('dotenv').config()

export default {
    jwtSecret : process.env.JWT_SECRET || 'test' ,
    DB :{
        URI : process.env.MONGODB_URI || 'test',
        USER : process.env.MONGODB_USER || 'test',
        PASSWORD : process.env.MONGODB_PASS  || 'test'
    }
}