/**
 * 用户表userInfo的相关操作
 */
const BaseService=require("../service/BaseService");
/**
 * @class AdminService 用户表userinfo的数据操作
 * @extends BaseService 继承基础Service
 */
class AdminService extends BaseService{
    constructor(){
        super("userInfo");
    }

    /**
     * @name checkLogin 用户名密码验证登录
     * @param {string} userName 用户名
     * @param {string} userPwd 密码
     * @returns {Promise} 返回executeSql执行的Promise 
     */
    checkLogin(userName,userPwd){
        let strSql=`select * from userInfo where isDel=false and username=? and password=? `;
        return this.executeSql(strSql,[userName,userPwd]);
    }
}
module.exports=AdminService;