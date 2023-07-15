const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res) => {
    res.send('Hi Deepanshu');
})

app.get('/about',(req,res) => {
    res.json({
        name:"deeshu"
    })
})

app.post('/',(req,res) => {
    console.log(req);
    res.json({
        name:"deeshu"
    })
})

app.listen(3000,()=>console.log('Port running at 3000'));