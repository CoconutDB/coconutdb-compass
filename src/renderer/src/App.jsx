import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Nav from "./components/Nav/Nav"
import { useEffect } from "react"
import LearnMore from "./pages/LearnMore"
import CompassEnv from "./pages/CompassEnv"

const AppRoutes = () => {
  const location = useLocation()

  return (
    <>
      {/* Show Nav only if not on "/" */}
      {location.pathname !== "/" && <Nav />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LearnMore" element={<LearnMore /> } />
        <Route path="/CompassEnv" element={<CompassEnv /> } />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
