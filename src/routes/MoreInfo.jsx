import { useLocation,Link } from "react-router-dom"
import Nav from "./Nav"
import { useEffect,useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export default function MoreInfo() {

  useEffect(() => {
   window.scrollTo(0,0)
  }, [])
 const location = useLocation()
 const {theme,setTheme} = useContext(ThemeContext)
 const { state } = location


  const info = state.data.filter(item => {
    return item.name.toLowerCase().includes(state.name.toLowerCase())
  })


  const items =  info.map(item => {
    return(
       <div key={item.name} className="overflow-x-hidden">
        <Nav/>
       <section className={`transition-all duration-300 ease-in flex flex-col  w-full lg:mx-auto lg:mt-[4.5%]  lg:h-[100vh] h-[130vh] pb-5 mt-[20%] ${theme.sbg}`}>
        <button className={`lg:ml-[5%] ml-[5%] mt-[5%] mb-10 w-[100px] lg:h-[40px] h-[50px] rounded-md shadow-md ${theme.txt} flex items-center justify-center`}><Link className="w-full flex items-center justify-center gap-3"  to="/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg> back</Link></button>
        <div className=" lg:w-[90%] w-full mt-5 mx-auto flex flex-col lg:flex-row  lg:h-[65%] h-[90%] gap-5">
         <img className="lg:w-[40%] w-[90%] mx-auto" src={item.flags.svg} alt={`${item.name} flag`} />
        <div className=" lg:w-[60%] flex w-full   items-center lg:justify-center h-full">
         <div className="w-[90%]  mx-auto h-[80%] flex flex-col gap-5">
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
            <li className={`${theme.txt}`}>Currencies: <span className={`font-thin`}> {item.currencies && item.currencies.map(item => item.name)}</span></li>
            <li className={`${theme.txt}`}>Languages: <span className={`font-thin`}>{item.languages && item.languages.map(item => item.name)}</span></li>
          </ul>
          </div>
           
          <div className="flex lg:items-center w-full lg:flex-row flex-col gap-3 lg:gap-0">
           <p className={`text-sm ${theme.txt}  font-bold`}>Border Countries</p>
           <ul className="flex gap-1">
            {
             item.borders && item.borders.map(item => <li className={`${theme.sbg} ${theme.txt} font-light text-sm shadow-md lg:w-[80px] w-[60px] h-[35px] grid items-center justify-center`}>{item}</li>)
            }
            </ul>
         </div>
        </div>

         
        </div>
      
        </div>
       
       </section>
     </div>)
  })
 
  return(<>
    {items}
 </>)
   
}