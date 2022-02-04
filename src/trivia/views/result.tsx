import { Button } from "components/Button";
import { Container } from "components/Container";
import { Title } from "components/Title";
import React, { FC } from "react";
import { Answer } from "../components/Answer";
import { AnswerList } from "../components/AnswerList";

export const Result: FC = () => {
  const answers = [];
  const questions = [];
  const score = "3 / 10";

  return (
    <Container bottom={(<Button onClick={console.log}>PLAY AGAIN?</Button>)}>
      <Title>
        You scored
        <br />
        {score}
      </Title>
      <AnswerList>
        {questions.map((q, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Answer key={`${i}`} kind="correct">Unturned originally started as a  Roblox game</Answer>
        ))}
      </AnswerList>
    </Container>
  );
};
