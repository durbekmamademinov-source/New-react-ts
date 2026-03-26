import { Route, Routes } from "react-router"
import Header from "./pages/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"


function App() {

  return (
    <div className="app ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )

}

export default App
