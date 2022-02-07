import camelcaseKeys from "camelcase-keys";
import React, {
  createContext, FC, useCallback, useContext, useEffect, useMemo, useState,
} from "react";
import { Answer, Question, TriviaAPI } from "src/questions/api";

type Stage = "start" | "playing" | "finish";

type TriviaContextType = {
  init: (_: { stage: Stage }) => void;
  start: () => void;
  replay: () => void;
  setAnswer: (_: Answer) => void;
  answers: Answer[];
  questions: Question[];
  currentQuestion?: number;
  stage: Stage;
  isLoading: boolean;
  isError: boolean;
};

const TriviaContext = createContext<TriviaContextType | null>(null);

export const TriviaProvider: FC = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [stage, setStage] = useState<Stage>("start");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getQuestions = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const { data: { results } } = await TriviaAPI.getQuestions();
      setIsLoading(false);
      return camelcaseKeys(results);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
    return [];
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getQuestions();
      setQuestions(data);
    })();
  }, [getQuestions]);

  const reset = useCallback(({ newStage }: { newStage: Stage }) => {
    (async () => {
      const data = await getQuestions();
      setQuestions(data);
      setAnswers([]);
      setStage(newStage);
      setCurrentQuestion(0);
    })();
  }, [getQuestions]);

  const init = useCallback(() => reset({ newStage: "start" }), [reset]);

  const start = useCallback(() => {
    setStage("playing");
  }, []);

  const replay = useCallback(() => reset({ newStage: "playing" }), [reset]);

  const setAnswer = useCallback((newAnswer: Answer) => {
    setAnswers(oldAnswers => oldAnswers.concat(newAnswer));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(count => count + 1);
    } else {
      setStage("finish");
    }
  }, [currentQuestion, questions.length]);

  const value = useMemo(() => ({
    init,
    start,
    replay,
    setAnswer,
    answers,
    questions,
    currentQuestion,
    stage,
    isLoading,
    isError,
  }), [answers, currentQuestion, init, isError, isLoading, questions, replay, setAnswer, stage,
    start]);

  return (
    <TriviaContext.Provider value={value}>
      {children}
    </TriviaContext.Provider>
  );
};

export const useTrivia = () => useContext(TriviaContext)!;
