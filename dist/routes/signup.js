"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controller/authController"));
const router = express_1.default.Router();
//route to render the signup view
router.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
});
router.post('/signup', authController_1.default.registerUser);
exports.default = router;
