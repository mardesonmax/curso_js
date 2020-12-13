//Arquivo de configuração
require('dotenv').config();

const port = process.env.PORT || 3000; //Porta server
const express = require('express');
const app = express(); //Intancia do server
const mongoose = require('mongoose'); //BD 
mongoose.connect(process.env.CONNECTIONSTRING, { //Conectando com BD
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.emit('execut');
    })
    .catch(e => console.log(e));

//session
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// flash menssages
const flash = require('connect-flash');
//rotas
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { globalMid, csrfError } = require('./src/middlewares/middleware');

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

//Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());
//Middlewares
app.use(globalMid);
app.use(csrfError);

//Routes
app.use(routes);

app.on('execut', () => {
    app.listen(port, () => {
        console.log(`Link http://localhost:${port}`);
        console.log(`Server on port.: ${port}`);
    })
});