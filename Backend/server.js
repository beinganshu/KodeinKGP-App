require('dotenv').config();
const express= require('express');
const app=express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const cors= require('cors');
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://Anshu:12345@cluster0.dggq7pf.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
const db= mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

const quoteRouter = require('./routes/quote');
app.use('/quote', quoteRouter);
app.listen(5050,()=> console.log('server started on port 5050'));