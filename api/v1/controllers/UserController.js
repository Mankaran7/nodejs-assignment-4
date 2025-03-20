import express from 'express';
import { getallusers, createuser } from '../services/UserService.js';
import passport from 'passport';
const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const response = await getallusers();
        if (response.success) {
            return res.status(200).send({ data: response.data });
        } else {
            throw new Error('Error fetching users');
        }
    } catch (err) {
        console.log('Error in GET /:', err.message);
        return res.status(400).send({ message: err.message || '' });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const response = await createuser(req.body);
        if (response.success) {
            return res.status(201).send({ message: response.message });
        } else {
            throw new Error('Error creating user');
        }
    } catch (err) {
        console.log('Error in POST /signup:', err.message);
        return res.status(400).send({ message: err.message || '' });
    }
});
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).send({ message: 'Error during login' });
        }
        if (!user) {
            return res.status(401).send({ message: info.message });
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(500).send({ message: 'Error while logging in' });
            }
            return res.status(200).send({ message: 'Login successful', user });
        });
    })(req, res, next);
});
export default router;
