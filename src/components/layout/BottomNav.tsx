import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Trophy, DollarSign, Wrench, GraduationCap } from 'lucide-react'

const navItems = [
  { icon: Home, label: 'HOME', path: '/home' },
  { icon: Trophy, label: 'RANKING', path: '/ranking' },
  { icon: DollarSign, label: 'MEU DINHEIRO', path: '/money', isCenter: true },
  { icon: Wrench, label: 'FERRAMENTAS', path: '/tools' },
  { icon: GraduationCap, label: 'ACADEMY', path: '/academy' },
]

export const BottomNav: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg-secondary border-t border-border-default" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex items-center justify-around h-14">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path

          if (item.isCenter) {
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative -mt-6"
              >
                <div className={`
                  w-14 h-14 rounded-full flex items-center justify-center
                  bg-gradient-to-br from-primary to-primary-pressed
                  shadow-[0_4px_16px_rgba(0,132,255,0.4)]
                  active:scale-95 transition-transform duration-200
                `}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </Link>
            )
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex flex-col items-center justify-center gap-1 px-3 py-2
                transition-colors duration-200
                ${isActive ? 'text-primary' : 'text-text-secondary'}
              `}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
