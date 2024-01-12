"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const quizController_1 = require("../controller/quizController");
const router = express_1.default.Router();
// Route to create a new quiz
router.post('/quiz', quizController_1.createQuiz);
// Route to get quiz questions
router.get('/quiz/:id/questions', quizController_1.getQuizQuestions);
//route to render the level view
router.get('/level', (req, res) => {
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
exports.default = router;
