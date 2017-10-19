let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let {computers,phones,other} = require('./goodsList');
let list = require('./goodsList');
let swiper = require('./homeSwiper');
let cart = require('./cart');
let app = express();

app.use(bodyParser.json());

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
    res.header('Access-Control-Allow-Origin', "http://localhost:8080");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    res.header('Access-Control-Allow-Methods', "GET,POST,PUT,DELETE,OPTIONS");
    //允许跨域传cookie
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == 'OPTIONS') {
        res.end('');
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


app.post('/cart',function (req,res) {
    // {
    //     count:1,
    //     category:'computers',
    //     id:102,
    // }
    let body= req.body;
    let product = goodList[body.category].find((item,index)=>item.id == body.id);
    product = {...product,...body};
    cart.push(product);
});
let users = [];
app.post('/login', function (req, res) {
    let user = req.body;
    let oldUser = users.find(item => item.mobile == user.mobile && item.password == user.password);
    if(oldUser){
        req.session.user = user;//把用户写入会话对象中
        res.json({code:0,success:'登录成功!',user});
    }else{
        res.json({code:1,error:'登录失败!'});
    }
});
app.post('/register', function (req, res) {
    let user = req.body;//{mobile,password}
    console.log(user);
    let oldUser = users.find(item => item.mobile == user.mobile);
    if (oldUser) {
        res.json({code: 1, error: '用户名重复'});
    } else {
        users.push(user);
        //后台向前台返回数据的时候需要一个编码，0表示成功，1表示失败
        res.json({code: 0, success: '用户注册成功'});
    }
});

