import { useCallback } from "react";
import { TriviaAPI } from "./api";

export const useQuestions = () => {
  const read = useCallback(async () => {
    try {
      const { data: { results } } = await TriviaAPI.readQuestions();
      return results;
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { read };
};
