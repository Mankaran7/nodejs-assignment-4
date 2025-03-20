import express from 'express';
import { getallstudents, createstudent,updatestudent,deletestudent} from '../services/StudentService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await getallstudents();
        if (response.success) {
            return res.status(200).send({ data: response.data });
        } else {
            throw new Error('Error in get API');
        }
    } catch (err) {
        console.log('Get API controller catch:', err);
        return res.status(400).send({ message: err.message || '' });
    }
});

router.post('/create', async (req, res) => {
    try {
        const response = await createstudent(req.body);
        if (response.success) {
            return res.status(200).send({ message: response.message });
        } else {
            throw new Error('Error in creating student');
        }
    } catch (err) {
        console.log('Error in post controller:', err);
        return res.status(400).send({ message: err.message || '' });
    }
});
router.put('/update', async (req, res) => {
    try {
        const response = await updatestudent(req.body);
        if (response.success) {
            return res.status(200).send({ message: response.message });
        } else {
            throw new Error('Error in updating student');
        }
    } catch (err) {
        console.log('Error in update controller:', err);
        return res.status(400).send({ message: err.message || '' });
    }
});
router.delete('/deletestudent/:id',async(req,res)=>{
    try{
         const id=parseInt(req.params.id)
        const response=await deletestudent(id)
        if(response.success){
            return res.status(200).send({ message: response.message });
        }else{
            throw new Error('Error in deleting student');
        }
    }catch(err){
        console.log('Error in delete controller:', err);
        return res.status(400).send({ message: err.message || '' });
    }
})

export default router;
