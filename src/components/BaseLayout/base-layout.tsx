import React, { FC } from "react";

export const BaseLayout: FC = ({ children }) => (
  <main>
    <section>
      {children}
    </section>
  </main>
);
