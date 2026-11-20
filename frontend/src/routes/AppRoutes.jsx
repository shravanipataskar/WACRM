import { Route, Routes } from 'react-router-dom'
import WelcomePage from '../pages/WelcomePage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
    </Routes>
  )
}

export default AppRoutes
