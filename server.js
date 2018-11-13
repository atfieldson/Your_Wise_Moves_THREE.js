let express = require('express');
let app = express();
let PORT = 5000

app.use(express.static('./public'));



app.listen(5000, function(){
    console.log('Listening on port:', PORT);  
})