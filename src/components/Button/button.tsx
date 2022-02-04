import React, { FC } from "react";

type Props = {
  onClick: () => void;
};

export const Button: FC<Props> = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>{children}</button>
);
