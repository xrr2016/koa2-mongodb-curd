var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.get('/:name', function (ctx, next) {
  ctx.body = 'this a users response!' + `${ctx.params.name}`;
});


module.exports = router;
