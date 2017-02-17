const Router = require('koa-router');
const crypto = require('crypto');

const router = new Router();

router.get('/api/key', (ctx, next) => {
  const randomBytes = crypto.randomBytes(1024).toString('base64');
  const hash = crypto.createHash('sha256');
  hash.update(randomBytes);
  ctx.body = hash.digest('hex');
});


module.exports = router;
