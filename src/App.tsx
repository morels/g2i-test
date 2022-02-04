import { BaseLayout } from "components/BaseLayout";
import React, { useEffect } from "react";
import { useQuestions } from "./questions/useQuestions";
import { Start } from "./trivia/views/start";

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
    <BaseLayout>
      <Start />
    </BaseLayout>
  );
};

export default App;
