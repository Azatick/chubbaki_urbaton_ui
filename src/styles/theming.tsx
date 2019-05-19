import React from "react";
import { ThemeProvider } from "emotion-theming";

import { defaultTheme } from "./themes";

interface Props {
  children: React.ReactNode;
}

/**
 * Провайдер тем
 */
export default ({ children }: Props) => (
  <ThemeProvider theme={defaultTheme} children={children} />
);
