'use strict'
const Koa = require("koa")
const fs = require("fs")
const app = new Koa()

const main = ctx => {
    ctx.response.type="html"
    ctx.response.body=fs.createReadStream("./template.html")
}

app.use(main)

console.log("listen 3000 port")
app.listen(3000)