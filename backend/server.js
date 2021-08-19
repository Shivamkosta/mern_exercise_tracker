const express = require('express');
const mongoose = require("mongoose");

const cors = require('cors');
const bodyParser = require('body-parser');

require("dotenv").config();

mongoose.connect(process.env.ATLAS_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true
})
.then(() => console.log("mongodb database connection successfully..."))
.catch(err => console.log("err",err));

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const exerciseRouter = require("./routes/exercise");
const usersRouter = require('./routes/users');

app.use('/exercise',exerciseRouter);
app.use('/users',usersRouter);


app.listen(port, () => console.log(`Server is running on port ${port}`));
