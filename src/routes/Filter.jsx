import { useRef, useState,useEffect,useContext } from "react"
import data2 from "../../data.json"
import { ThemeContext } from "./ThemeContext"

export default function Filter({data,setIsData}) {
  const {theme,setTheme} = useContext(ThemeContext)
   const [isPrev,setIsPrev] = useState(false)
   const [newData,setNewData] = useState(data)
    const dropDownRef = useRef(null)
    const cavt = useRef(null)
    
    function dropDown(e) {
        setIsPrev(!isPrev)
        if (!isPrev) {
           cavt.current.classList.add("animate-rotate") 
           dropDownRef.current.classList.remove("hidden")
           dropDownRef.current.classList.add("flex","animate-grow")
        } else {
          cavt.current.classList.remove("animate-rotate") 
          cavt.current.classList.add("animate-unrotate")
          dropDownRef.current.classList.remove("flex","animate-grow")
          dropDownRef.current.classList.add("animate-ungrow")
          setTimeout(() => {
            cavt.current.classList.remove("animate-unrotate")
            dropDownRef.current.classList.remove("animate-ungrow")
            dropDownRef.current.classList.add("hidden")
          },500);
        }
    }

   function filtered(e) {
     const filtered = newData.filter(item => {
      return e.target.innerText.toLowerCase() == item.region.toLowerCase()
     })
     setIsData(filtered)
   }
  return(
    <div className="relative transition-all duration-300 lg:h-[60px] h-full w-[95%] mx-auto flex lg:flex-row flex-col gap-4 justify-between lg:mt-[7%] mt-[30%] ">
      <svg className="absolute top-4 left-4 lg:top-6 lg:left-8" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
      <Input
       placeholder="Search for a country..."
       data={newData}
       prevData={data}
       isChange={isPrev}
       setIsData={setIsData}
       theme={theme}
      />
      <div className="transition-all duration-300 lg:w-1/2 w-[55%] flex flex-col lg:items-end relative h-[40%] lg:h-full">
        <div className={`transition-all duration-300 ${theme.sbg} ${theme.txt} shadow-lg h-full lg:w-[37%] w-full flex  items-center justify-center lg:rounded-md lg:gap-10 gap-5`}>
            <p className="text-md">Filter by Region</p>
            <i ref={cavt}  onClick={dropDown} className="fa-solid fa-angle-down" style={{"color": ""}}></i>
        </div>
        <ul ref={dropDownRef} className={`transition-all duration-300 hidden ${theme.sbg} ${theme.txt} lg:w-[36.5%] w-full absolute top-[110%] animate-g rounded-md shadow-sm  flex-col justify-around p-6`}>
          <li  onClick={filtered}><button>Africa</button></li>
          <li onClick={filtered}><button>Americas</button></li>
          <li  onClick={filtered}><button> Asia</button></li>
          <li  onClick={filtered}><button>Europe</button></li>
          <li  onClick={filtered}><button>Oceania</button></li>
        </ul>
      </div>
    </div>
  )
}

function Input({  placeholder, data, prevData, isChange, setIsData,theme }) {
  function change(e) {
      console.log(e.target.value == "")
      const it = data.filter(item => {
       return item.name.toLowerCase().includes(e.target.value.toLowerCase())
      })
      e.target.value == "" ? setIsData(data2) : setIsData(it)
  }
    return <input onChange={change}  className={` ${theme.sbg} pl-[12%] lg:pl-[6%] pr-3 lg:h-full h-[40%] lg:w-[40%] w-full placeholder:text-lightModeInput lg:rounded-sm  shadow-md ${theme.inp}`} placeholder:text-lg pl-10 type="text" name="" placeholder="Search for a country..."
    />
}