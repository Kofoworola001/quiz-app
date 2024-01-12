import express, { Request, Response } from 'express';
import Quiz from '../model/Quiz';
import generateQuizQuestions from '../utils/quizUtils';

const router = express.Router();

// Route to start a quiz session
router.get('/quizTaking/:quizId', async (req: Request, res: Response) => {
    try {
        const { quizId } = req.params;
        console.log(quizId, "quizId")

        if (!quizId) {
            return res.status(400).json({ error: 'quiz id is required' })
        }

        // Fetch the quiz
        const quiz = await Quiz.findByPk(quizId);
        console.log(quiz, "quiz")
        
        if (!quiz) {
            return res.status(404).json({ error: 'Quiz not found' });
        }

        // Generate and retrieve quiz questions
        const quizQuestions = await generateQuizQuestions(quiz);

        console.log('quizQuestions:', quizQuestions);
        
        // Pass the quiz details and questions to the quiz-taking EJS template
        res.render('quizTaking', { title: 'Quiz Session', quiz, quizQuestions });
    } catch (error) {
        console.error('Error starting quiz session:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;