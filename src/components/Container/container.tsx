import clsx from "clsx";
import React, { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./container.module.css";

type Props = HTMLAttributes<HTMLElement> & {
  bottom?: ReactNode;
};

export const Container: FC<Props> = ({ children, bottom, className }) => (
  <section className={clsx(styles.Container, className)}>
    {children}
    {bottom}
  </section>
);
