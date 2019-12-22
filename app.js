const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

const indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use(express.static(path.join(__dirname, 'public')));


const server = http.createServer(app);

server.listen(8080, '127.0.0.1', () => {
    console.log('application using ${port}')
});