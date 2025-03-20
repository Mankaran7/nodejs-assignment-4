import pool from '../../db/index.js';

const getallstudents = async () => {
    try {
        const result = await pool.query('SELECT * FROM students', []);
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

const createstudent = async (student) => {
    const { name, age, grade } = student;
    try {
        const query = 'INSERT INTO students (name, age, grade) VALUES($1, $2, $3)';
        await pool.query(query, [name, age, grade]);
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
const updatestudent = async (student) => {
    const { id,grade } = student;
    try {
        const query = 'update students set grade=$2 where id=$1';
        await pool.query(query, [id,grade]);
        return {
            success: true,
            message: 'Record updated successfully',
        };
    } catch (err) {
        console.log(err.message);
        return {
            success: false,
            message: 'Error updating record',
        };
    }
};
const deletestudent=async(id)=>{
    try{
        const query='delete from students where id=$1'
        await pool.query(query,[id])
        return {
            success: true,
            message: 'Record updated successfully',
        };

    }catch(err){
        console.log(err.message);
        return {
            success: false,
            message: 'Error deleting record',
        };
    }
}

export { getallstudents, createstudent ,updatestudent,deletestudent};
