const port = 3000;
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

//Routes
app.use(express.urlencoded({ extended: true }));
app.use(routes);

//Estaticos
app.use(express.static(path.resolve(__dirname, 'public')))

//Views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`Link http://localhost:${port}`);
    console.log(`Server on port.: ${port}`);
})