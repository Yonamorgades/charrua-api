import express, { Router }  from 'express';
import cors from 'cors';
import morgan from 'morgan'
import passport from 'passport';
import passportMidle from './middleweares/passport';
import privateRoutes from './routes/products';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('/home/ymorgades/Documentos/charrua-api/swagger.json');
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


const DisableTryItOutPlugin = function() {
    return {
      statePlugins: {
        spec: {
          wrapSelectors: {
            allowTryItOutFor: () => () => false
          }
        }
      }
    }
  }

  const options = {
    swaggerOptions: {
        plugins: [
             DisableTryItOutPlugin
        ]
     }
  };

app.use(authRoutes)
app.use(privateRoutes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
export default app