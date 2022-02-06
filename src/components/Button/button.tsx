import React, { FC } from "react";
import styles from "./button.module.css";

type Props = {
  kind?: "primary" | "secondary";
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, onClick, kind = "primary" }) => (
  <button type="button" onClick={onClick} data-kind={kind} className={styles.Button}>{children}</button>
);
