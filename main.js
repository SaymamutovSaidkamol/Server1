import express from "express"

let app = express()


app.use(express.json())

app.get("/api", (req, res)=>{
    res.json({data: "Start server"})
})

app.get("/api/id", (req, res)=>{

    res.json({data: "Start Sultamat"})
})


app.listen(3000, ()=>{
    console.log("Server 3000 portda ishlamlamoqda...");
    
})