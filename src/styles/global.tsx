import React from "react";
import { Global, css } from "@emotion/core";

import reset from "./reset";

export default () => (
  <Global
    styles={css`
      ${reset}
    `}
  />
);
