const mysql = require("mysql")
const express = require("express")
const app = express ();


const cors = require("cors")

app.use(cors ());
app.use(express.json())



var connection = mysql.createConnection({
    host : "127.0.0.1",
    user:"root",
    password:"root",
    database:"backenddata"
})



connection.connect((error)=>{
    if(error){
        console.log("Error connecting to database :", error)
    }else{
        console.log("connected to the database")
    }
})


app.get("/students",(req,res)=>{
    const q = "SELECT * FROM students";
   
    connection.query(q, (error,data)=>{
        if(error){
            console.log(error)
            return res.status(500).send({error : "error while fetching students"})
        }
        return res.json(data)
    })


})



app.post("/students", (req,res)=>{
    const q = "INSERT INTO students(`roll`, `name`, `mark`, `gender`,`city`) VALUES (?, ?, ?, ?, ?)"


    const values = [
        req.body.roll,
        req.body.name,
        req.body.mark,
        req.body.gender,
        req.body.city,
   
    ]


    connection.query(q, values,  (error,data)=>{
        if(error){
            console.log(error)
            return res.status(500).send({error : "error while fetching students"})
        }
        return res.json(data)
    })


})

app.get("/students/get/:id", (req,res)=>{
    const studentId = req.params.id;
    const q = "SELECT * from students where id= ?"

    connection.query(q,  [studentId] , (err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send({err : "error while fetching students"})
        }
        return res.json(data)  
    })
})

app.put("/students/update/:id", (req,res)=>{
    const studentId = req.params.id
 
     const q = "UPDATE students SET `roll`= ?, `name`= ?,`mark`=?,`gender`= ? , `city`= ?  WHERE id = ?"
     const values = [
         req.body.roll,
         req.body.name,
         req.body.mark,
         req.body.gender,
         req.body.city,
         studentId
     ]
     connection.query(q, values,(err,data)=>{
         if(err){
             console.log(err)
             return res.status(500).send({err : "error while fetching students"})
         }
         return res.json(data)  
     })
 })

 app.delete("/students/delete/:id", (req,res)=>{
    const studentId = req.params.id
    const q = "DELETE from students where id= ?"
    connection.query(q,[studentId], (err,data)=>{
        if(err){
            console.log(err)
            return res.status(500).send({err : "error while fetching students"})
        }
        return res.json(data) 
    })
})


app.listen(8080,()=>{
    console.log("connected to backend...");
    console.log("port number 8080 listening...")
})



