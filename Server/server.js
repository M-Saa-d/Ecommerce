import express from 'express';

const app = express();
app.use(express.json());
app.get('/',function(req,res){
     res.send('Hello, world!')
})

app.listen(port,()=>{
    console.log (`server is running on port ${port}`)
})