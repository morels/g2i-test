import { Button } from "components/Button";
import { Card } from "components/Card";
import { Container } from "components/Container";
import { Title } from "components/Title";
import React, { FC } from "react";

export const Question: FC = () => {
  const category = "Entertainment: Video Games";
  const question = "Unturned originally started as a Roblox game";

  return (
    <Container bottom={(
      <div>
        <Button onClick={console.log}>False</Button>
        <Button onClick={console.log}>True</Button>
      </div>
    )}
    >
      <Title>{category}</Title>
      <Card>
        <p>{question}</p>
      </Card>
      <p>1 of 10</p>
    </Container>
  );
};
