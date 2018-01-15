'use strict'
const Koa = require("koa")
const koabody = require("koa-body")
const app = new Koa()

const main = async ctx => {
    let body = ctx.request.body;
    if (!body.name) {
        ctx.throw(400, '.name required');
    } else {
        ctx.body = {
            name: body.name
        };
    }
}

app.use(koabody())
app.use(main)
app.listen(3000)