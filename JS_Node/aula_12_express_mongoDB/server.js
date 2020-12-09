require('dotenv').config();

const port = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.emit('execut');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');

//Routes
app.use(express.urlencoded({ extended: true }));

//Middlewares
app.use(middleware);

app.use(routes);


//Estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

//Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('execut', () => {
    app.listen(port, () => {
        console.log(`Link http://localhost:${port}`);
        console.log(`Server on port.: ${port}`);
    })
});