import React, { FC } from "react";
import styles from "./base-layout.module.css";

export const BaseLayout: FC = ({ children }) => (
  <main>
    <section className={styles.Container}>
      {children}
    </section>
  </main>
);
