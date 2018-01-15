'use strict'
const os = require("os")
const path = require("path")
const Koa = require("koa")
const koabody = require("koa-body")
const fs = require("fs")

const app = new Koa()

const main = async ctx => {
    let tmpdir = 'D:/'
    let filePaths = [];
    let files = ctx.request.body.files || {}

    for (let key in files) {
        let file = files[key]
        let filePath = path.join(tmpdir, file.name)
        let reader = fs.createReadStream(filePath)
        let writer = fs.createWriteStream(filePath);
        reader.pipe(writer)
        filePaths.push(filePath)
    }
    ctx.body = filePaths
}

app.use(koabody({
    multipart: true
}));
app.use(main);
app.listen(3000)

//use
curl --form upload=@D:\xxx.txt http://127.0.0.1:3000