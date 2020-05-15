const express = require('express');
const mongoose = require('mongoose');
const bodyparse = require('body-parser');
const app = express();
const dressRoute = require('./routes/dresses');
const eleRoute = require('./routes/electronics');
const funRoute = require('./routes/funturies');

app.use(bodyparse.json());
app.use('/dress',dressRoute);
app.use('/electro',eleRoute);
app.use('/fun',funRoute);


mongoose.connect("mongodb://localhost:27017/ECart",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Conneted to Database"))
.catch((err) => console.log("Message" + err));

app.get('/',(req,res) => {
    let a = ["Electronics","Dresses","Funturies"];
    res.send(a);
})

app.listen(3000,() => {
    console.log("connected to server");
})