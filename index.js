const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hi Deepanshu');
})

app.listen(3000,()=>console.log('Port running at 3000'));