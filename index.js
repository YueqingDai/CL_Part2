let express = require('express');//requre the package
let app = express();


app.use('/',express.static('public'));

//parctice code
app.get("/about",(req,res) =>{
    res.send("ABOUT PAGE HERE");
})

//where can we see the app running
app.listen(3000, ()=>{
    console.log("!!!app is running at localhost:W3000!!!");
})

