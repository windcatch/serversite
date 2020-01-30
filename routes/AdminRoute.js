/**
 * 用户信息路由模块
 */
const router=require("express").Router();
const ServiceFactory=require("../service/ServiceFactory");

router.post("/checkLogin",async (req,resp)=>{
    try{
        //接收前端传过来的用户名，密码
        let {userName,userPwd}=req.body;
        let adminService=ServiceFactory.instance().AdminService;
        let result=await adminService.checkLogin(userName,userPwd);
        if(result.length>0){
            //跳转之前，把当前用户的信息记录到系统里的session里面
            req.session.userInfo=result[0];
            resp.send({cuccess:"登陆成功"});
        }else{
            resp.send({err:"用户名或密码错误"});
        }
    }catch(error){
        resp.status(500);
        resp.send(error);
    }
});

router.get("/",(req,resp)=>{
    if(!req.session.userInfo){
        resp.send({isLogin:false});
    }
});

//退出登录
router.get("/logout",(req,resp)=>{
    //销毁session
    req.session.destroy();
    resp.send({destroied:"已销毁"});
})

module.exports=router;