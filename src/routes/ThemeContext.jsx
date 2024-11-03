import { createContext, useState } from "react";

export const ThemeContext = createContext()

 export default function ThemeProvider({children}) {
    const [theme,setTheme] = useState({
        bg: "bg-lightModeBackground",
        sbg: "bg-darkModeTextLightModeElements",
        txt:"lightModeText",
        cvt:"#252627"
      })

      return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
      )

} 