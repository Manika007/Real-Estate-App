import "./layout.scss"
import Navbar from "./components/Navbar/Navbar"
import homePage from "./routes/homePage/homePage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
        </div>
      <div className="content">
        <homePage/>
        </div>
    
      </div>
  )
}

export default App