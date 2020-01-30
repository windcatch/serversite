/**
 * 加载app.js里面的路由
 */
const fs=require("fs");
const path=require("path");

const loadRoute=app=>{
    //首先确定路由的目录
    let routesPath=path.join(__dirname,"../routes");
    fs.readdirSync(routesPath).forEach(item=>{
        app.use(`/${item.replace("Route.js","")}`,require(path.join(routesPath,item)))
    });//app.use(path,router)
}

module.exports=loadRoute;