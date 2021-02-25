import express, { Router }  from 'express';
import cors from 'cors';
import morgan from 'morgan'
import passport from 'passport';
import passportMidle from './middleweares/passport';
import privateRoutes from './routes/products';
const app = express();

// Routes
import authRoutes from './routes/authRoute'

//settings
app.set('port', process.env.PORT || 3000)

// middleweares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());
//Include passport to validate tokens
app.use(passport.initialize());
passport.use(passportMidle)


app.get('/',(req, res) => {
    res.send(`The api is at localhost:${app.get('port')}`)
})

app.use(authRoutes)
app.use(privateRoutes)
export default app