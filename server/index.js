const express = require('express');
const morgan = require('morgan');
const app = express();


const {mongoose} = require('./database');

//Setings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/employee.route'))


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('Server en el puerto ', app.get('port'));
})