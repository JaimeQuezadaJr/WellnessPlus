require ('./config/mongoose.config')
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true}));
// app.use(cors());


const userRoutes = require('./routes/user.routes');
userRoutes(app);

//.. routes for goals
require('./routes/nutrition.routes')(app);
require('./routes/mindfulness.routes')(app);
require('./routes/fitness.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));