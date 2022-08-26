const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const Hbs = require('express-handlebars');
const { query } = require('express');
const port = 8080;

const route = require('./routes');

// ctrl + c để thoát khỏi server
//ctrl + s lưu lại
//npm + start
app.use(
    express.urlencoded({
        //đây là middleware để xử lý form data từ html
        extended: true,
    }),
);
app.use(express.json()); //đây là middleware để xử lý data từ file code js

//local host--hosting: lưu trữ cục bộ--lưu trữ

//  action-->dispatcher-->function handler chính là controller

app.get('/', (req, res) => {
    //req: request yêu cầu từ máy khách, res: reponsive yêu cầu từ máy chủ
    // var a=1;
    // var b=2;
    // var c= a+b;
    res.send('Default');
});

// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     next() // pass control to the next handler
//   })
// app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })

// app.listen(5500)
app.listen(port, () => {
    console.log(`server started ${port}`); // dấu ` k phải '
});
//http logger
// app.use(morgan('combined'))

//template engine
app.engine('hbs', Hbs.engine({ extname: '.hbs' })); //engine(ext,callback)
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
route(app);

// console.log('Path: ',path.join(__dirname,'/views/layouts/main.hbs'))

//show file static
app.use(express.static(path.join(__dirname, 'public/img')));
app.use(express.static(path.join(__dirname, 'public/css')));
