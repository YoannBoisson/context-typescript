import React from "react";
import { ThemeContextType } from "../@types/theme";
import { ThemeContext } from "../context/themeContext";

const Test: React.FC = () => {
  const { theme } = React.useContext(ThemeContext) as ThemeContextType;
  return <div data-theme={theme}>Salut la team</div>;
};

export default Test;
