const express = require ('express');
const app = express();
const port = 9000
const userRoute = require("./routes/userRoute")


app.get("/", (req, res) => {
    res.send("welcome to homepage")
})

app.use(userRoute)

app.listen(port, ()=>{
    console.log(`server started successfully. click http://localhost:${port} to open website`)
})