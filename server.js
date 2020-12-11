const express=require("express");

const app=express();

const {db,Tasks}=require('./db');
const PORT=process.env.PORT||3111;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));
app.use('/',express.static(__dirname+"/public"));



app.post('/alltask',async(req,res)=>{
  try{
    const name=req.body.name;
const task=await Tasks.findAll({
    where:{
        name
    }
})

res.send(task);

  }catch(error){
res.send(error);
  }
})

app.post('/tasks',async (req,res)=>{
    try{
        const task= await Tasks.create({
            name:req.body.username,
            done:req.body.done
        })
    
    res.send(task);
    }catch(error){
    res.send(error);

                }
     })

db.sync().then(()=>{

    app.listen(PORT,()=>{
        console.log("server is up at port 3111")
    })

}).catch(console.error)
 
