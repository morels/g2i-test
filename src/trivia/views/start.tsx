import { Button } from "components/Button";
import { Container } from "components/Container";
import { Title } from "components/Title";
import React from "react";

export const Start = () => (
  <Container bottom={<Button onClick={console.log}>BEGIN</Button>}>
    <Title>Welcome to the Trivia Challenge!</Title>
    <p>You will be presented with 10 True or False questions.</p>
    <p>Can you score 100%?</p>
  </Container>
);
