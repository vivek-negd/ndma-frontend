import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { antdTheme } from "../assets/styles/antd-theme";
import { ThemeProvider } from "../context";
import "../assets/styles/themes.css";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <ConfigProvider theme={antdTheme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
  );
};
