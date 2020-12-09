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

//session | flash menssages
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

//Routes Configs
const routes = require('./routes');
const path = require('path');
const middleware = require('./src/middlewares/middleware');
app.use(express.urlencoded({ extended: true }));
//Estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'sdafglgjwenfa',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


//Middlewares
app.use(middleware);
//Routes
app.use(routes);

//Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('execut', () => {
    app.listen(port, () => {
        console.log(`Link http://localhost:${port}`);
        console.log(`Server on port.: ${port}`);
    })
});