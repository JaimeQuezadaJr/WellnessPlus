const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000'}));
// app.use(cors());

require ('./config/mongoose.config')

app.use(express.json());

const routes = require('./routes/user.routes');
routes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));