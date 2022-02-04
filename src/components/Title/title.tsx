import React, { FC } from "react";
import styles from "./title.module.css";

export const Title: FC = ({ children }) => (
  <h1 className={styles.Title}>{children}</h1>
);
