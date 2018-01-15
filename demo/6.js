'use strict'

const Koa = require("koa")
const route = require("koa-route")
const app = new Koa();

const about = ctx => {
    ctx.response.type = "html";
    ctx.response.body = '<a href="/">Index page</a>';
}

const main = ctx => {
    ctx.response.body = 'Hello world';
}

app.use(route.get('/',main))
app.use(route.get('/about',about))

app.listen(3000)