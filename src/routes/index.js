const newsRoute = require('./News');
const inforRoute = require('./Infor');
const homeRouter = require('./Home');
const searchRouter = require('./Search');

function routes(app) {
    // app.get('/home',(req,res)=>{
    //   res.render('home')//render là lấy ra, trích xuất ra
    // })
    app.use('/home', homeRouter);
    app.use('/news', newsRoute);
    app.use('/infor', inforRoute);
    app.use('/search', searchRouter);
    // app.post('/news',(req,res)=>{//phương thức post
    //   console.log(req.body)
    //   res.render('news')//render là lấpy ra, trích xuất ra
    // })

    // app.get('/search',(req,res)=>{// phương thức get
    //   //console.log(req.query)//hiện toàn bộ query parameter khi tìm kiếm
    //   res.render('search')
    // })
}
module.exports = routes;
