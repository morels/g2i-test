import React, { FC } from "react";
import { IconBaseProps } from "react-icons";
import { HiMinus, HiPlus } from "react-icons/hi";
import Tokens from "styles/tokens.json";
import styles from "./answer.module.css";

type IconPops = {
  kind?: "correct" | "incorrect";
} & IconBaseProps;

type Props = {
  kind?: IconPops["kind"];
  text: string;
};

const Icon: FC<IconPops> = ({ kind, className }) => {
  const isCorrect = kind === "correct";

  if (isCorrect) return <HiPlus color={Tokens.secondary} size={32} className={className} />;
  return <HiMinus color={Tokens.primary} size={32} className={className} />;
};

export const Answer: FC<Props> = ({ kind = "correct", text }) => (
  <li className={styles.Container}>
    <Icon className={styles.Icon} kind={kind} />
    {/* eslint-disable-next-line react/no-danger */}
    <p className={styles.Text} dangerouslySetInnerHTML={{ __html: text }} />
  </li>
);
