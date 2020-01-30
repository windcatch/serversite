const {app,server,express,fs}=require("./init");
//添加一个拦截器，给相应的请求添加请求头
app.use((req,resp,next)=>{
    resp.setHeader("Access-Control-Allow-Headers","Content-Type");
    resp.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    resp.setHeader("Access-Control-Allow-Origin","*");
    //放行
    next();
});

 
//加载路由
require("./utils/loadRoute")(app);
//启动服务器
server.listen(800,()=>{
    console.log("服务器启动了");
})