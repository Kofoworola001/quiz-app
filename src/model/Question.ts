import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/sequelize';
import Quiz from './Quiz';

interface QuestionAttributes {
    id: number,
    text: string,
    options: string,
    category: string,
    correctAnswer: string,
    difficulty: string,
    quizId: number,
}

class Question extends Model <QuestionAttributes> {
  public id!: number;  
  public text!: string;
  public options!: string;
  public category!: string;
  public correctAnswer!: string;
  public difficulty!: string;
  public quizId!: number;
}

Question.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    options: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correctAnswer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Quiz,
            key: 'id',
        },
    },  
}, {
    sequelize,
    modelName: 'Question',
});

export default Question;