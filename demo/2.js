'use strict'
const Koa = require("koa")
const app = new Koa();

// const main=ctx=>{
//     ctx.response.body="Hello world"
// }

const main=function(ctx){
    ctx.response.body="Hello world1"
}

app.use(main)
app.listen(3000)