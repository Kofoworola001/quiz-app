import express from 'express';
import authController from '../controller/authController';

const router = express.Router();

//route to render the signup view
router.get('/login', (req, res)=> {
  res.render('login', { title: 'Login' });  
});

router.post('/login', authController.loginUser)
   
export default router;