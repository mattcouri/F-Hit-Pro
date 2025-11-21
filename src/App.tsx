import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { PrivacyProvider } from './contexts/PrivacyContext'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Ranking } from './pages/Ranking'
import { Money } from './pages/Money'
import { Tools } from './pages/Tools'
import { Academy } from './pages/Academy'
import { Config } from './pages/Config'

function App() {
  return (
    <ThemeProvider>
      <PrivacyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/money" element={<Money />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/config" element={<Config />} />
          </Routes>
        </BrowserRouter>
      </PrivacyProvider>
    </ThemeProvider>
  )
}

export default App
