import React, { FC } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

type Props = {
  kind?: "correct" | "incorrect";
};

export const Answer: FC<Props> = ({ kind = "correct", children }) => {
  const isCorrect = kind === "correct";

  return (
    <li>
      {isCorrect ? <HiPlus /> : <HiMinus />}
      <p dangerouslySetInnerHTML={{ __html: children }} />
    </li>
  );
};
