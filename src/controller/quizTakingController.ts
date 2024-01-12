import { Request, Response } from 'express';
import Quiz from '../model/Quiz';
import QuizHistory from '../model/QuizHistory';
import generateQuizQuestions from '../utils/quizUtils';

export const startQuiz = async (req: Request, res: Response): Promise<void> => {
    try {
        const quizId = req.params.id;
        console.log(quizId);
        
        // Fetch the quiz
        const quiz = await Quiz.findByPk(quizId);        
        console.log(quiz);

        if (!quiz) {
            res.status(404).json({ error: 'Quiz not found' });
            return;
        }

        const quizQuestions = await generateQuizQuestions(quiz);

        // Save the quiz in progress to the user's quiz history
        await QuizHistory.create({
            quizId,
            status: 'in-progress',
            answers: [], 
            startTime: new Date(),
        });

        res.status(200).json({ message: 'Quiz started', quiz: quizQuestions });
    } catch (error) {
        console.error('Error starting quiz:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};