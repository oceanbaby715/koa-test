'use strict'

const Koa=require("koa")
const app=new Koa();

const main=ctx=>{
    if(ctx.request.path !=="/"){
        ctx.response.type="html";
        ctx.response.body='<a href="/">Index page</a>';
    }else{
        ctx.response.body='Hello world';
    }
}

app.use(main)

app.listen(3000)