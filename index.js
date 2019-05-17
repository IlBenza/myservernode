//Alessandro Vendramini

const express = require('express')
const app = express()
const todos = require('./routes/todos')
let port = process.argv[2] || 2223

app.use(express.urlencoded({extended: false}))

//Verifico se sono loggato
const myLogger = (req, res, next) => {
  console.log('Sono loggato');
  next();
};

//Routes
app.use(myLogger);
app.use('/api/v1/todos', todos);

//Errore
app.use((req, res) => {
    
    res.status(404).send('Error 404')
});
  
app.listen(port);