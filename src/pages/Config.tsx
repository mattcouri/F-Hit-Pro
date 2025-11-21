import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardContent } from '../components/ui/Card'
import { User, Shield, Lock, Bell, CreditCard, HelpCircle } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { usePrivacy } from '../contexts/PrivacyContext'

export const Config: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { showValues, togglePrivacy } = usePrivacy()

  const sections = [
    { icon: User, title: 'Perfil', description: 'Editar informações pessoais' },
    { icon: Shield, title: 'Segurança', description: 'Senha e autenticação' },
    { icon: Lock, title: 'Privacidade', description: 'Gerenciar dados e permissões' },
    { icon: Bell, title: 'Notificações', description: 'Configurar alertas' },
    { icon: CreditCard, title: 'Assinatura', description: 'Plano e pagamento' },
    { icon: HelpCircle, title: 'Suporte', description: 'Ajuda e contato' },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6 animate-in">
          Configurações
        </h1>

        <div className="space-y-4 mb-6">
          <Card className="animate-in" style={{ animationDelay: '100ms' }}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">Tema</h3>
                  <p className="text-sm text-text-secondary">
                    {theme === 'dark' ? 'Modo Escuro' : 'Modo Claro'}
                  </p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`
                    relative w-14 h-8 rounded-full transition-colors duration-200
                    ${theme === 'dark' ? 'bg-primary' : 'bg-border-default'}
                  `}
                >
                  <div
                    className={`
                      absolute top-1 left-1 w-6 h-6 rounded-full bg-white
                      transition-transform duration-200 shadow-md
                      ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '150ms' }}>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-text-primary">Exibir Valores</h3>
                  <p className="text-sm text-text-secondary">
                    {showValues ? 'Valores visíveis' : 'Valores ocultos'}
                  </p>
                </div>
                <button
                  onClick={togglePrivacy}
                  className={`
                    relative w-14 h-8 rounded-full transition-colors duration-200
                    ${showValues ? 'bg-primary' : 'bg-border-default'}
                  `}
                >
                  <div
                    className={`
                      absolute top-1 left-1 w-6 h-6 rounded-full bg-white
                      transition-transform duration-200 shadow-md
                      ${showValues ? 'translate-x-6' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-3">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <Card
                key={section.title}
                hover
                className="animate-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-text-primary">{section.title}</h3>
                      <p className="text-sm text-text-secondary">{section.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
