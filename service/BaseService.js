/**
 * 基础业务逻辑
 * @returns DBUtil
 */
const DBUtil=require("../utils/DBUtil");

/**
 * @class BaseService
 */
class BaseService extends DBUtil{
    /**
     * @param {string} tableName 数据表的名称
     */
    constructor(tableName){
        super();
        this.tableName=tableName;
    }

    /**
     * @name getList 获取所有列表
     * @returns {Promise} 返回executeSql执行的promise
     */
    getAllList(){
        let strSql=`select * from ${this.tableName} where isDel=false`;
        return this.executeSql(strSql);
    }
    /**
     * @name createCountSql 生成count查询总条数的SQL语句
     * @param {string} strWhere 查询条件
     * @returns {string} countSql 生成好的SQL语句
     */
    createCountSql(strWhere){
        let countSql=`select count(*) 'totalCount' from ${this.tableName} where isDel=false AND ${strWhere}`
        return countSql;
    }
}

module.exports=BaseService;