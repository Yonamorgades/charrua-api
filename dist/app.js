"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middleweares/passport"));
const products_1 = __importDefault(require("./routes/products"));
const app = express_1.default();
// Routes
const authRoute_1 = __importDefault(require("./routes/authRoute"));
//settings
app.set('port', process.env.PORT || 3000);
// middleweares
app.use(morgan_1.default('dev'));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//Include passport to validate tokens
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
app.get('/', (req, res) => {
    res.send(`The api is at localhost:${app.get('port')}`);
});
app.use(authRoute_1.default);
app.use(products_1.default);
exports.default = app;
