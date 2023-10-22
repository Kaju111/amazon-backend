const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const port = process.env.PORT || 5000;

const apiData = require("../backend/data/data.json")

app.get("/",(req, res)=>{
    res.send("Hello I am live")
})

app.get("/product",(req, res)=>{

    let name = req.query.name

    if (name) {
        let data = apiData.filter(i => i.name.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()))

        return res.send(data)
    }

    res.send(apiData)
})

app.listen(port, () =>{
    console.log("I am live again")
})

