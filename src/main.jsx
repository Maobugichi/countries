import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Root from "./routes/Root.jsx"
import ErrorPage from "./ErrorPage.jsx"
import MoreInfo from "./routes/MoreInfo.jsx"
import ThemeProvider from "./routes/ThemeContext.jsx"


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/moreinfos/:moreinfoid" element={<MoreInfo />} />
      </Routes>
    </HashRouter>
  );

};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
