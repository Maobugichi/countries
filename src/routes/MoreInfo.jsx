import { useLocation,Link } from "react-router-dom"
import Nav from "./Nav"
import { useState,useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export default function MoreInfo() {
 const location = useLocation()
 const {theme,setTheme} = useContext(ThemeContext)
 const { state } = location
  const info = state.data.filter(item => {
    return item.name == state.name
  })

  const items = info.map(item => {
    return(
       <>
       <Nav
        
       />
       <section className={`transition-all duration-300 ease-in flex flex-col ${theme.bg}  w-full lg:mx-auto lg:mt-[4.5%] mt-[15%] h-[100vh] `}>
        <button className={`ml-[5.5%] mt-11 mb-10 w-[100px] lg:h-[40px] h-[50px] rounded-md shadow-md ${theme.txt}`}><Link  to="/">back</Link></button>
        <div className="lg:w-[89%] w-full mt-5 mx-auto flex flex-col lg:flex-row  lg:h-[65%] h-full justify-between ">
        <img className="lg:w-[45%] w-[90%] mx-auto" src={item.flags.svg} alt={`${item.name} flag`} />
        <div className="lg:w-1/2 flex w-full   items-center lg:justify-center h-full">
        <div className="w-[90%]  mx-auto h-[70%] flex flex-col gap-5">
          <h3 className={ `${theme.txt} text-xl font-bold`}>{item.name}</h3>
          <div className="flex flex-col lg:flex-row  h-[90%] justify-between">
          <ul className="flex flex-col gap-2">
            <li className={`${theme.txt}`}>Native Name: <span className={`font-thin`}>{item.nativeName}</span></li>
            <li className={`${theme.txt}`}>Population: <span className={`font-thin`}>{item.population}</span> </li>
            <li className={`${theme.txt}`}>Region: <span className={`font-thin`}>{item.region}</span></li>
            <li className={`${theme.txt}`}>Sub Region: <span className={`font-thin`}>{item.subregion}</span></li>
            <li className={`${theme.txt}`}>Captital: <span className={`font-thin`}>{item.capital}</span></li>
          </ul>

          <ul className="flex flex-col gap-2">
            <li className={`${theme.txt}`}>Top Level Domain: <span className={`font-thin`}> {item.topLevelDomain[0]}</span></li>
            <li className={`${theme.txt}`}>Currencies: <span className={`font-thin`}> {item.currencies.map(item => item.name)}</span></li>
            <li className={`${theme.txt}`}>Languages: <span className={`font-thin`}>{item.languages.map(item => item.name)}</span></li>
          </ul>
          </div>
          
        </div>
        </div>
      
        </div>
       
       </section>
     </>)
  })
 
  return(<>
    {items}
 </>)
   
}