import React from "react";
import { TriviaProvider } from "./trivia/Trivia";
import { Main } from "./trivia/views/main";
import "styles/theme.css";

const App = () => (
  <TriviaProvider>
    <Main />
  </TriviaProvider>
);

export default App;
