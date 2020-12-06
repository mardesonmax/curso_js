const port = 3000;
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(port, () => {
    console.log(`Link http://localhost:${port}`);
    console.log(`Server on port.: ${port}`);
})