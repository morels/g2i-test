import React from "react";
import { TriviaProvider } from "./trivia/Trivia";
import { Main } from "./trivia/views/main";

const App = () => (
  <TriviaProvider>
    <Main />
  </TriviaProvider>
);

export default App;
