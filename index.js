const data=require("./db.json")
const cors=require("cors")
const express=require("express")
const app=express()

app.use(express.json())
app.use(cors())

app.get("/api/dishes",(req,res)=>{
    res.send(data.dishes)
})

app.get("/api/leaders",(req,res)=>{
    res.send(data.leaders)
})

app.get("/api/promotions",(req,res)=>{
    res.send(data.promotions)
})

app.get("/api/comments",(req,res)=>{
    res.send(data.comments)
})

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log("server started on port "+port)
})