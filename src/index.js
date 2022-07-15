const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const path = require('path');
const port = 3000;
const routes = require('./routes');

app.use(
    express.urlencoded({
        extend: true,
    }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
routes(app);
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);
