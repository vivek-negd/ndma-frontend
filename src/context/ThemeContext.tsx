import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeColors {
  primaryColor: string;
  headerBg: string;
  sidebarBg: string;
  textColor: string;
  bgColor: string;
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: ThemeColors;
  updateColors: (colors: Partial<ThemeColors>) => void;
  fontFamily: string;
  updateFontFamily: (font: string) => void;
  resetTheme: () => void;
}

const defaultLightColors: ThemeColors = {
  primaryColor: "#1890ff",
  headerBg: "#ffffff",
  sidebarBg: "linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)",
  textColor: "#000000",
  bgColor: "#f5f5f5",
};

const defaultDarkColors: ThemeColors = {
  primaryColor: "#1890ff",
  headerBg: "#1f1f1f",
  sidebarBg: "linear-gradient(180deg, #1e3a8a 0%, #1e40af 100%)",
  textColor: "#ffffff",
  bgColor: "#1f1f1f",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return (savedTheme as Theme) || "light";
  });

  const [colors, setColors] = useState<ThemeColors>(() => {
    const savedColors = localStorage.getItem("themeColors");
    if (savedColors) {
      return JSON.parse(savedColors);
    }
    return theme === "light" ? defaultLightColors : defaultDarkColors;
  });

  const [fontFamily, setFontFamily] = useState<string>(() => {
    return (
      localStorage.getItem("fontFamily") ||
      "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", colors.primaryColor);
    root.style.setProperty("--header-bg", colors.headerBg);
    root.style.setProperty("--sidebar-bg", colors.sidebarBg);
    root.style.setProperty("--text-primary", colors.textColor);
    root.style.setProperty("--bg-primary", colors.bgColor);
    root.style.setProperty("--font-family", fontFamily);

    localStorage.setItem("themeColors", JSON.stringify(colors));
    localStorage.setItem("fontFamily", fontFamily);
  }, [colors, fontFamily]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setColors(newTheme === "light" ? defaultLightColors : defaultDarkColors);
  };

  const updateColors = (newColors: Partial<ThemeColors>) => {
    setColors((prev) => ({ ...prev, ...newColors }));
  };

  const updateFontFamily = (font: string) => {
    setFontFamily(font);
  };

  const resetTheme = () => {
    const defaultColors =
      theme === "light" ? defaultLightColors : defaultDarkColors;
    setColors(defaultColors);
    setFontFamily("Inter, system-ui, Avenir, Helvetica, Arial, sans-serif");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        colors,
        updateColors,
        fontFamily,
        updateFontFamily,
        resetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
