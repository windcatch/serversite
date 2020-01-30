/**
 * 初始化项目
 * @returns http
 * @returns express
 * @returns path
 * @returns body-parser
 * @returns express-session
 */
const http=require("http");
const express=require("express");
const app=express();
const server=http.createServer(app);
const fs=require("fs");
const bodyParser=require("body-parser");//POST取值插件
//Express里面加载插件(中间件)使用app.use()
app.use(bodyParser.urlencoded({
    extended:false,
    limit:'10mb'
}));
app.use(bodyParser.json({
    limit:"10mb"
}));
//express的session插件
const session=require("express-session");
//加载session插件(中间件)
app.use(session({
    secret:"wch",//是否加密
    resave:true,//是否可以重新保存
    saveUninitialized:false,//每次保存时是否重新初始化
    cookie:{
        maxAge:1000*60*10
    }
}));

module.exports={
    app,server,express,fs
}