import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Trophy, DollarSign, Wrench, GraduationCap, Settings, Moon, Sun, Eye, EyeOff } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { usePrivacy } from '../../contexts/PrivacyContext'

const navItems = [
  { icon: Home, label: 'HOME', path: '/home' },
  { icon: Trophy, label: 'RANKING', path: '/ranking' },
  { icon: DollarSign, label: 'MEU DINHEIRO', path: '/money' },
  { icon: Wrench, label: 'FERRAMENTAS', path: '/tools' },
  { icon: GraduationCap, label: 'ACADEMY', path: '/academy' },
  { icon: Settings, label: 'CONFIG', path: '/config' },
]

export const TopNav: React.FC = () => {
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { showValues, togglePrivacy } = usePrivacy()

  return (
    <nav className="hidden md:flex sticky top-0 z-50 h-16 bg-bg-secondary/90 backdrop-blur-xl border-b border-border-default">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/home" className="text-2xl font-bold text-primary">
            F-HIT Pro
          </Link>
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200
                    ${isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:bg-bg-interactive hover:text-text-primary'
                    }
                  `}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={togglePrivacy}
            className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-bg-interactive transition-colors"
            aria-label={showValues ? "Ocultar valores" : "Mostrar valores"}
          >
            {showValues ? (
              <Eye className="w-5 h-5 text-text-secondary" />
            ) : (
              <EyeOff className="w-5 h-5 text-text-secondary" />
            )}
          </button>

          <button
            onClick={toggleTheme}
            className="w-11 h-11 rounded-full flex items-center justify-center hover:bg-bg-interactive transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-text-secondary" />
            ) : (
              <Moon className="w-5 h-5 text-text-secondary" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
