import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Title } from "components/Title";
import React, { FC } from "react";
import { useTrivia } from "../Trivia";

export const Question: FC = () => {
  const { setAnswer, questions, currentQuestion } = useTrivia();

  return (
    <Container bottom={(
      <div>
        <Button onClick={() => setAnswer("False")}>False</Button>
        <Button onClick={() => setAnswer("True")}>True</Button>
      </div>
    )}
    >
      <Title>{questions[currentQuestion].category}</Title>
      <Card>
        <p dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
      </Card>
      <p>{`${currentQuestion + 1} of 10`}</p>
    </Container>
  );
};
