let express = require('express');
let app = express();
require('dotenv').config();


const PORT = process.env.PORT || 5000;

app.use(express.static('./public'));

app.listen(PORT, function(){
    console.log('Listening on port:', PORT);  
})