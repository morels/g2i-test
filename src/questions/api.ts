import axios from "axios";

export type APIQuestion = {
  category: string;
  correct_answer: Answer;
  difficulty: string;
  incorrect_answers: Answer[];
  question: string;
  type: string;
};

export type Answer = "True" | "False";

export type Question = {
  category: string;
  correctAnswer: Answer;
  difficulty: string;
  incorrectAnswers: Answer[];
  question: string;
  type: string;
};

type Response = {
  data: {
    response_code: number;
    results: APIQuestion[];
  }
};

export const TriviaAPI: {
  getQuestions: () => Promise<Response>
} = {
  getQuestions: () => axios.get<{}, Response>("/api/questions?amount=10&difficulty=hard&type=boolean"),
};
