import pool from '../../db/index.js';
import bcrypt from "bcrypt"
const getallusers = async () => {
    try {
        const result = await pool.query('SELECT * FROM users', []);
        return {
            success: true,
            data: result.rows,
        };
    } catch (err) {
        console.log('Error in select query:', err);
        return {
            success: false,
            error: err,
        };
    }
};

const createuser = async (user) => {
    const { name, email,password,age } = user;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email,password,age) VALUES($1, $2, $3,$4)';
        await pool.query(query, [name, email,hashedPassword,age]);
        return {
            success: true,
            message: 'Record inserted into table successfully',
        };
    } catch (err) {
        console.log(err.message);
        return {
            success: false,
            message: 'Error creating record',
        };
    }
};


export { getallusers,createuser};
