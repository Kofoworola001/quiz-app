import { Sequelize } from 'sequelize';
import Question from '../model/Question';
import Quiz from '../model/Quiz';

// Function to fetch quiz questions based on difficulty
const generateQuizQuestions = async (quiz: Quiz) => {
    try {
        const questions = await Question.findAll({
            where: {
                quizId: quiz.id,
                difficulty: quiz.difficulty,
            },
            order: Sequelize.literal('RANDOM()'), //randomize the order
        });

        console.log('Quiz ID:', quiz.id);
        console.log('Difficulty:', quiz.difficulty);
        
        return questions;
    } catch (error) {
        console.error(`Error generating quiz questions for quiz ID ${quiz.id} and difficulty ${quiz.difficulty}:`, error);
        return [];
    }
};

export default generateQuizQuestions;