"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controller/authController"));
const router = express_1.default.Router();
//route to render the signup view
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/login', authController_1.default.loginUser);
exports.default = router;
