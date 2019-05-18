import React from "react";
import { ThemeProvider } from "emotion-theming";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import { defaultTheme } from "./themes";

interface Props {
  children: React.ReactNode;
}

const styleNode = document.createComment("insertion-point-jss");
document.head.insertBefore(styleNode, document.head.firstChild);

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: "insertion-point-jss"
});

/**
 * Провайдер тем
 */
export default ({ children }: Props) => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <ThemeProvider theme={defaultTheme} children={children} />
  </JssProvider>
);
