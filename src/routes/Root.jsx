import Nav from "./Nav"
import Filter from "./Filter"
import Countries from "./Countries"
import CountriesList from "./CountriesList"
import data from "../../data.json"
import { useEffect,useState,useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Root() {
  const {theme,setTheme} = useContext(ThemeContext)
  const [isData,setIsData] = useState(data)
 
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then(response => {
      if (!response.ok) {
        throw new Error("error")
      }
      return response.json()
    }).then(data => {
      console.log(data)
    })
  },[])

    return(
        <div className={`font-custom-font overflow-x-hidden transition-all duration-300 bg- ${theme.bg} h-auto min-h-[200vh] `}>
         <header className="lg:h-[150px]  h-[250px] flex flex-col justify-between w-full mx-auto ">
          <Nav
          />
          <Filter
           data={isData}
           setTheme={setTheme}
           theme={theme}
           setIsData={setIsData}
          />
         </header>

         <main className="mt-10">
          <section className="w-full">
            <CountriesList>
                <Countries
                data={isData}
                theme={theme}
                />
            </CountriesList>
          </section>
        </main>
        </div>
        
    )
}