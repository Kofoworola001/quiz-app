import express from 'express';
import { createQuiz, getQuizQuestions } from '../controller/quizController';

const router = express.Router();

// Route to create a new quiz
router.post('/quiz', createQuiz);

// Route to get quiz questions
router.get('/quiz/:id/questions', getQuizQuestions);


//route to render the level view
router.get('/level', (req, res)=> {

    //get the user's ID from the query params
    const quizId = req.query.quizId;

    res.render('levels', { title: 'Choose your difficulty', quizId });  
  });

router.post('/level', (req, res) => {
    //get the selected difficulty from the form submission
    const selectedDifficulty = req.body.difficulty;

    const quizId = req.body.quizId;

    const userId = req.query.userId;
    res.redirect(`/quizTaking/${quizId}?userId=${userId}`);
});
export default router;