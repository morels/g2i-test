import axios from "axios";

type Question = {
  category: string;
  correct_answer: boolean;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

type Response = {
  response_code: number;
  results: Question[];
};

export const TriviaAPI = {
  readQuestions: () => axios.get<{}, Response>("/api/questions?amount=10&difficulty=hard&type=boolean"),
};
