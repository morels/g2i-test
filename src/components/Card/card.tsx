import React, { FC } from "react";
import styles from "./card.module.css";

export const Card: FC = ({ children }) => (
  <div className={styles.Card}>{children}</div>
);
