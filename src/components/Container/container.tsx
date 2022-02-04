import React, { FC, ReactNode } from "react";

type Props = {
  bottom?: ReactNode;
};

export const Container: FC<Props> = ({ children, bottom }) => (
  <section>
    {children}
    {bottom}
  </section>
);
