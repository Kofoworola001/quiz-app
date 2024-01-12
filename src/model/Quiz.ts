import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../utils/sequelize';
import Question from './Question';

interface QuizAttributes {
  id: number;
  timeLimit: number;
  difficulty: string;
}

class Quiz extends Model<QuizAttributes> {
  public id!: number;
  public timeLimit!: number;
  public difficulty!: string;

  static associate() {
    Quiz.hasMany(Question, { foreignKey: 'quizId' });
  }
  // @ts-ignore
  public setQuestions: Sequelize.HasManySetAssociationsMixin<Question, number>;
}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    timeLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20,
    },
    difficulty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Quiz',
  }
);

Quiz.associate();

export default Quiz;
export { QuizAttributes };