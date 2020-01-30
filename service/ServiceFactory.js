/**
 * 工厂类
 */
const path=require("path");
const fs=require("fs");

class ServiceFactory{
    constructor(){
        let serviceDirectory=path.join(__dirname,"../service.impl");
        fs.readdirSync(serviceDirectory).forEach(item=>{
            let classObj=require(path.join(serviceDirectory,item));
            //创建对象的实例
            let instance=Reflect.construct(classObj,[]);//执行构造方法，[]中为参数
            Reflect.set(this,item.replace(".js",""),instance);//给对象添加属性
        })
    }
    static instance(){//静态方法不会被继承
        if(this.serviceFactory){
            //已经实例化
            return this.serviceFactory;
        }else{
            this.serviceFactory=new ServiceFactory();
            return this.ServiceFactory;
        }
    }
}

module.exports=ServiceFactory;