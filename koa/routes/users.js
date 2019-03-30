const router = require('koa-router')();
var seq = require('sequelize');
var man = require('../model/user');


router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', function (ctx, next) {
  
  
  let user = ctx.request.body.name;

  let password = ctx.request.body.password;

  ctx.body = '收到';
  
  

  console.log('init db ok.');

  (async () => {
    var data = await man.create({
        name: user,
        password: password,
       
    });

    console.log('登陆成功');
})();

})

module.exports = router
