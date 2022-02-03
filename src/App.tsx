import React, { useEffect } from "react";
import { useQuestions } from "./questions/useQuestions";

const App = () => {
  const { read } = useQuestions();

  // eslint-disable-next-line
  useEffect(() => {
    const fetch = async () => {
      const quesitons = await read();
      // eslint-disable-next-line no-console
      console.log("data", quesitons);
    };
    fetch();
  }, [read]);

  return (
    <div>
      <h1>Trivia game</h1>
    </div>
  );
};

export default App;
