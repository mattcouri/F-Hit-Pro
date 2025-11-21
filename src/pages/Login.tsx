import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (email === 'admin' && password === 'admin') {
      navigate('/home')
    } else {
      setError('Usuário ou senha inválidos')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-in">
          <h1 className="text-4xl font-bold text-primary mb-2">F-HIT Pro</h1>
          <p className="text-text-secondary">Sua jornada para liberdade financeira</p>
        </div>

        <div className="bg-bg-secondary border border-border-default rounded-2xl p-8 shadow-xl animate-in" style={{ animationDelay: '100ms' }}>
          <form onSubmit={handleLogin} className="space-y-6">
            <Input
              label="Usuário"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="w-5 h-5" />}
              placeholder="admin"
              required
            />

            <Input
              label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<Lock className="w-5 h-5" />}
              placeholder="••••••••"
              required
            />

            {error && (
              <div className="p-3 bg-error/10 border border-error/30 rounded-lg text-error text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
            >
              Entrar
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border-default text-center space-y-3">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => navigate('/onboarding/step1')}
            >
              Primeiro Acesso? Clique Aqui para Criar Conta
            </Button>

            <button className="text-sm text-text-tertiary hover:text-text-secondary">
              Acesso Mentor/Empresa
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
