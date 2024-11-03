import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Root from "./routes/Root.jsx"
import ErrorPage from "./ErrorPage.jsx"
import MoreInfo from "./routes/MoreInfo.jsx"
import ThemeProvider from "./routes/ThemeContext.jsx"


const router = createBrowserRouter([{
  path:"/",
  element: <Root/>,
  errorElement: <ErrorPage/>, 
},
{
  path:"moreinfos/:moreinfoid",
  element: <MoreInfo/>
}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router ={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
