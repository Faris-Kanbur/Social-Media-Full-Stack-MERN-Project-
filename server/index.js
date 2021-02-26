import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


//server
const app = express();
dotenv.config();
const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
})

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors()); 

const CONNECTION_URL = process.env.CONNECTION_URL;
// const PORT = process.env.PORT || 5000;

//database connect
mongoose.connect(CONNECTION_URL, {
            useCreateIndex:true,
            useFindAndModify: false,
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        .then(() => console.log('Successfull connected to DB') )
        .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
        


app.use(express.json());
app.use('/posts' , postRoutes);