let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let {computers,phones,other} = require('./goodsList');
let list = require('./goodsList');
let swiper = require('./homeSwiper');
let cart = require('./cart');
let app = express();
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'zfpx'
}));
app.listen(3000);

/*app.use(function (req, res, next) {
  setTimeout(() => {
    next();
  }, 500)
});*/

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
    res.header('Access-Control-Allow-Method', 'GET,POST');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});

app.get('/swiper', function (req, res) {
    res.json(swiper);
});
app.get('/list',function (req,res) {
    let {offset, limit} = req.query;
    let clonedLessons = JSON.parse(JSON.stringify(list));
    let list = [...clonedLessons.computers,...clonedLessons.phones,clonedLessons.other];

    if (offset == 36) {
        clonedLessons.hasMore = false;
    }
    res.json(clonedLessons);
});
app.get('/computers',function (req,res) {

    res.json(computers)
});
app.get('/phones',function (req,res) {
    res.json(phones)
});
app.get('/other',function (req,res) {
    res.json(other)
});
app.get('/cart',function (req,res) {
    res.json(cart)
});

// app.post('/cart',function (req,res) {
//     // {
//     //     count:1,
//     //     category:'computers',
//     //     id:102,
//     // }
//     let body= req.body;
//     let product = goodList[body.category].find((item,index)=>item.id == body.id);
//     product = {...product,...body};
//     cart.push(product);
// });

