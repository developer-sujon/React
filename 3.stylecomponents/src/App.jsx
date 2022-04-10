import React, { useState } from "react";
import Card from "./components/Card";
import { Container } from "./components/styles/Container.style";
import { GlobalStyle } from "./components/styles/Global.style";
import { ThemeProvider } from "styled-components";

import theme from "./components/styles/Theme.style";
const { darkTheme, lightTheme } = theme;

function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Card themeHander={changeTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
