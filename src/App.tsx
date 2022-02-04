import React, { useEffect } from "react";
import { useQuestions } from "./questions/useQuestions";

const App = () => {
  const { getQuestions } = useQuestions();

  // eslint-disable-next-line
  useEffect(() => {
    const fetch = async () => {
      const quesitons = await getQuestions();
      // eslint-disable-next-line no-console
      console.log("data", quesitons);
    };
    fetch();
  }, [getQuestions]);

  return (
    <div>
      <h1>Trivia game</h1>
    </div>
  );
};

export default App;
