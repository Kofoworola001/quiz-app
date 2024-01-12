import express from 'express';
import authController from '../controller/authController';

const router = express.Router();

//route to render the signup view
router.get('/signup', (req, res)=> {
  res.render('signup', { title: 'Sign Up' });  
});

router.post('/signup', authController.registerUser)
 
export default router;