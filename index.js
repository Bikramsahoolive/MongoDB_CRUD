import express from "express";
import dbrouter  from './src/routers/routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT || 3000;

app.use("/api",dbrouter);

app.get("/",(req,res)=>{
    res.json({appName:"MongoDB CRUD",PORT:PORT,status:true,message:"All operation with mongodb."})
})


app.listen(PORT,()=>console.log(`Listening on port:${PORT}`));