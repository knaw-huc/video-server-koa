import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Maarte';
});

app.listen(process.env.PORT || 3000);