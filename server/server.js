require ('./config/mongoose.config')
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000'}));
// app.use(cors());


const userRoutes = require('./routes/user.routes');
userRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));