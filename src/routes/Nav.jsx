import { useState,useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Nav() {
  const {theme,setTheme} = useContext(ThemeContext)
  const [isLight,setIsLight] = useState(false)
  function chnageTheme() {
      setIsLight(!isLight)
      
      if (!isLight) {
        setTheme({
          bg: "bg-darkModeBackground ",
          sbg:"bg-darkModeElements",
          txt:"text-darkModeTextLightModeElements",
          cvt:"white"
        })
      } else {
        setTheme({
          bg: "bg-lightModeBackground",
          sbg: "bg-darkModeTextLightModeElements",
          txt:"lightModeText",
          cvt:"#252627"
        })
      }
  }

    return(
       <nav className={`transition-all duration-300 ease-in fixed top-0 z-10 w-full lg:w-full ${theme.sbg}  shadow-md lg:h-[60px] h-[80px] flex items-center justify-between`}>
        <div className="w-[90%] mx-auto flex justify-between">
          <h1 className={`lg:text-xl font-bold ${theme.txt}`}>Where in the world?</h1>
         <div className="flex items-center w-1/2 justify-end gap-3">
           <i className="fa-regular fa-moon fa-xl transition-all duration-300 ease-in" style={{"color": `${theme.cvt}`}}></i>
           <p onClick={chnageTheme} className={`text-sm ${theme.txt}`}>Dark Mode</p>
         </div>
        </div>
         
       </nav>
    )
}