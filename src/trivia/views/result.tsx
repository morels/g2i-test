import { Button } from "components/Button";
import { Container } from "components/Container";
import { Title } from "components/Title";
import React, { FC } from "react";
import { Answer } from "../components/Answer";
import { AnswerList } from "../components/AnswerList";
import { useTrivia } from "../Trivia";

export const Result: FC = () => {
  const { replay, answers, questions } = useTrivia();
  const correctScores = questions.map((q, i) => q.incorrectAnswers[0] !== answers[i]);
  const scoreValue = correctScores.reduce((total, s) => total + +s, 0);

  return (
    <Container bottom={(<Button onClick={() => replay()}>PLAY AGAIN?</Button>)}>
      <Title>
        You scored
        <br />
        {`${scoreValue} / 10`}
      </Title>
      <AnswerList>
        {questions.map(({ question }, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Answer key={`${i}`} kind={correctScores[i] ? "correct" : "incorrect"} text={question} />
        ))}
      </AnswerList>
    </Container>
  );
};
