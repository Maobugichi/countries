import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import { ThemeContext } from "./ThemeContext"
export default function Countries({data}) {
  const {theme,setTheme} = useContext(ThemeContext)
    return(
      <>
       {data.map((item,index) => {
        return(
          <Link key={item.name} className={`transition-all duration-300 w-[80%] mx-auto lg:w-[23%]  h-[400px] ${theme.sbg}`} to={`moreinfos/${index}`} state={{data:data,name:item.name,theme:theme}}>
            <div className={` h-full pb-5  rounded-md shadow-lg `}>
            <div style={{backgroundImage:`url(${item.flags.svg})`,backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"}} className={`rounded-t-md h-[55%] w-full`}>
            </div>
            <div  className="h-[40%]  grid items-center">
                <div className=" h-[75%] w-[80%] mx-auto flex flex-col justify-between ">
                <h2 className={`font-bold ${theme.txt}`}>{item.name}</h2>
                <ul className={`text-${theme.lightText} flex flex-col gap-1`}>
                    <li className={`${theme.txt}`}>Population: <span className={`${theme.txt} font-thin`}>{item.population}</span></li>
                    <li className={`${theme.txt}`}>Region: <span className={`font-thin`}>{item.region}</span></li>
                    <li className={`${theme.txt}`}>Capital: <span className="font-thin">{item.capital}</span></li>
                </ul>
                </div>
            </div>
          </div>
          </Link>   
        )
       })}
      </>
    )
}