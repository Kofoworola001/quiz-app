"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../utils/sequelize"));
const Quiz_1 = __importDefault(require("./Quiz"));
class Question extends sequelize_1.Model {
}
Question.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    options: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    correctAnswer: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    quizId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Quiz_1.default,
            key: 'id',
        },
    },
}, {
    sequelize: sequelize_2.default,
    modelName: 'Question',
});
exports.default = Question;
