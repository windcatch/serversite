const { app, server, express, fs } = require("./init");

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 34b25671f6dcb9d509b64338c8b2eee5a7829b3a
//添加一个拦截器，给相应的请求添加请求头
app.use((req, resp, next) => {
  resp.setHeader("Access-Control-Allow-Origin", '*');
  resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
  resp.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  //放行
  next();
});
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 34b25671f6dcb9d509b64338c8b2eee5a7829b3a
app.get("/",(req,resp)=>{
    if(!req.session.userInfo){
        resp.send({isLogin:false});
    }
});
<<<<<<< HEAD
=======
=======
 
>>>>>>> 0229edc40f9bc0d6d2451627c62f9f89c8e38c7f
>>>>>>> 224963bca7171e797264292e7565708eedc807ba
>>>>>>> 34b25671f6dcb9d509b64338c8b2eee5a7829b3a
//加载路由
require("./utils/loadRoute")(app);
//启动服务器
server.listen(800, () => {
  console.log("服务器启动了");
});
