const mongoose=require('mongoose')
const express=require('express')
const app=express()
const cors=require('cors');
const dotenv=require('dotenv');
const SimRoutes=require('./routes/sim-routes');
dotenv.config();
const url=process.env.url;
const port=process.env.port;


app.use(cors())
app.use(express.json());


try{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Successfully connected");
}
catch(error){

    console.log(error);
}

app.use("/simCard",SimRoutes);

app.listen(port,()=>{
    console.log("Running on "+port);
})
