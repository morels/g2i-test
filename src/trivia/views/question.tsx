import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Title } from "components/Title";
import React, { FC } from "react";
import styles from "./question.module.css";
import { useTrivia } from "../Trivia";

export const Question: FC = () => {
  const { setAnswer, questions, currentQuestion } = useTrivia();

  // Typechecking for TS compliance only
  if (currentQuestion === undefined) return null;

  return (
    <Container bottom={(
      <div className={styles.ButtonContainer}>
        <Button onClick={() => setAnswer("False")}>False</Button>
        <Button onClick={() => setAnswer("True")} kind="secondary">True</Button>
      </div>
    )}
    >
      <Title>{questions[currentQuestion].category}</Title>
      <div>
        <Card>
          {/* eslint-disable-next-line react/no-danger */}
          <p dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
        </Card>
        <p className={styles.CardNumber}>{`${currentQuestion + 1} of 10`}</p>
      </div>
    </Container>
  );
};
