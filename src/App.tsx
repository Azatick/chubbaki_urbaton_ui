import React from "react";

import { GlobalStyles, ThemeProvider } from "./styles";
import ReduxProvider from "./redux";
import Routes from "./routing";

const App: React.FC = () => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
      <GlobalStyles />
    </ReduxProvider>
  );
};

export default App;
