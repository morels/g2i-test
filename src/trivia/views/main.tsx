import { BaseLayout } from "components/BaseLayout";
import React from "react";
import { Question } from "./question";
import { Result } from "./result";
import { Start } from "./start";
import { useTrivia } from "../Trivia";

export const Main = () => {
  const { stage, isLoading, isError } = useTrivia();
  return (
    <BaseLayout>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          {stage === "start" && <Start />}
          {stage === "playing" && <Question />}
          {stage === "finish" && <Result />}
        </>
      )}
      {isError && <p>Error</p>}
    </BaseLayout>
  );
};
