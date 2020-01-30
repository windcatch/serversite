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
            resp.json({success:req.session});
        }else{
            resp.json({err:"用户名或密码错误"});
        }
    }catch(error){
        resp.status(500);
        resp.send(error);
    }
});

router.get("/log",(req,resp)=>{
    req.session.userInfo="abc";
    resp.send("已写入session")
});

router.get("/",(req,resp)=>{
    resp.send(req.session);
    if(!req.session.userInfo){
        resp.send({isLogin:false});
    }else{
        resp.send({isLogin:true});
    }
});

//退出登录
router.get("/logout",(req,resp)=>{
    //销毁session
    req.session.destroy();
    resp.send({destroied:"已销毁"});
})

module.exports=router;