require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

if(process.env.NODE_ENV === 'test') {
  mongoose.connect('mongodb://localhost:27017/blog-test', { useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });
}
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to mongooese...'));
app.listen(PORT, () => console.log('Listen in PORT: ' + PORT));