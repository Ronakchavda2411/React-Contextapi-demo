import "./App.css";
import ThemeContext from "./context/someConetx";
import { useState } from "react";
import Demo from "./components/Demo";

function App() {
  const [theme, setTheme] = useState({
    theme: "light",
    textColor: "black",
    bgColor: "white",
  });

  return (
    <div className="w-full h-screen" style={{ backgroundColor: theme.bgColor }}>
      <ThemeContext.Provider value={{ value: theme, setTheme: setTheme }}>
        <Demo />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
