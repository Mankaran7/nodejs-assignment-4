import pkg from 'pg'
import config from '../../config/index.js'
import util from 'util'
const {Pool}=pkg
const sql_pool=new Pool({
    user:config.dbuser,
    database:config.database,
    password:config.password,
    port:config.dbPort,
    max:config.max,
    
})
const pool={
    query:(sql,args)=>{
        return util.promisify(sql_pool.query).call(sql_pool,sql,args)
    }
}
export default pool