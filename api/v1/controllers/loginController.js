import express from 'express';
import passport from '../services/passportService.js';

const router = express.Router();

router.get(
    '/github',
    passport.authenticate('github', {
        scope: ['user:email']
    })
);

router.get(
    '/callback/github',
    passport.authenticate('github', {
        session: false
    }),
    async (req, res) => {
        try {
            console.log('success', req.user);

            res.redirect('http://localhost:5000?token=1234');
        } catch (err) {
            console.log('Catch block of GitHub callback', err);
        }
    }
);

export default router;
