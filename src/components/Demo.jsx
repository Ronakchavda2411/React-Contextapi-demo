import React, { useContext } from "react";
import ThemeContext from "../context/someConetx";

function Demo() {
  const theme = useContext(ThemeContext);
  return (
    <div className="w-full h-[500px] text-center">
      <h1 className="px-2 py-4"   style={{
          backgroundColor: theme.value.bgColor,
          color: theme.value.textColor,
        }} >Current Theme : {theme.value.theme}</h1>
      <div className="px-2 py-4"
        style={{
          backgroundColor: theme.value.bgColor,
          color: theme.value.textColor,
        }}
      >
        Demo
      </div>
      <button
      className="border  p-2 rounded-lg"
        style={{
            backgroundColor: theme.value.bgColor,
            color: theme.value.textColor,
            borderColor: theme.value.textColor
          }}
        onClick={() => {
          if (theme.value.theme === "light") {
            theme.setTheme({
              theme: "dark",
              textColor: "white",
              bgColor: "black",
            });
          } else {
            theme.setTheme({
              theme: "light",
              textColor: "black",
              bgColor: "white",
            });
          }
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default Demo;
