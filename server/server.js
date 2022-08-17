//imports
require ('./config/mongoose.config')
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 4000;

// create express app object
const app = express();

// express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cookie & jwt
// app.use(cors()); //if without cookie-parse
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true}));

// routes for login & registration
const userRoutes = require('./routes/user.routes');
userRoutes(app);

//.. routes for goals
require('./routes/nutrition.routes')(app);
require('./routes/mindfulness.routes')(app);
require('./routes/fitness.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));