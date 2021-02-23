import {Router} from 'express';
import { sign } from 'jsonwebtoken';
import {signIn,signup} from '../controller/user.controller'
const router = Router();

router.post('/signup',signup)

router.post('/signin',signIn)











export default router;