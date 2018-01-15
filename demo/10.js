'use strict'
const Koa = require('koa');
const app = new Koa();


const main = ctx => {
    ctx.response.body = 'Hello World';
};

const logger=(ctx,next)=>{
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}

app.use(logger)
app.use(main);

app.listen(3000);