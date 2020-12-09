const express = require('express');
const app = express();
const path = require('path');

app.use('/model',express.static('MLModel'))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})


const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server running in Port: ${port}`)
})