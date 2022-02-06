import React, { FC } from "react";
import styles from "./answer-list.module.css";

export const AnswerList: FC = ({ children }) => (
  <ul className={styles.AnswerList}>{children}</ul>
);
