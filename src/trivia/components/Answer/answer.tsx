import React, { FC } from "react";
import { HiMinus } from "react-icons/hi";

type Props = {
  kind?: "correct" | "incorrect";
};

export const Answer: FC<Props> = ({ kind = "correct", children }) => (
  <li>
    <HiMinus />
    <p>{children}</p>
  </li>
);
