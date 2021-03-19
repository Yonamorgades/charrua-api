import {Router} from 'express'
import passport from 'passport'
const router = Router();
import {getProducts,addProduct, deleteProduct,editProduct} from '../controller/product.controller';

//RETURN ALL PRODUCTS ON DATA BASE
router.get('/product',getProducts)


//MAKE A NEW PRODUCT ON DATABASE
router.post('/product',passport.authenticate('jwt',{session:false}),addProduct)



router.delete('/product/',passport.authenticate('jwt',{session:false}),deleteProduct)

router.put('/product/',passport.authenticate('jwt',{session:false}),editProduct)




export default router;