import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { TrendingUp, TrendingDown, PiggyBank, Target, Flame } from 'lucide-react'
import { usePrivacy } from '../contexts/PrivacyContext'
import { formatCurrency, maskValue } from '../utils/format'

export const Home: React.FC = () => {
  const { showValues } = usePrivacy()

  const mockData = {
    totalIncome: 5000,
    totalExpenses: 3500,
    savings: 1500,
    emergencyFund: 7500,
    emergencyFundGoal: 30000,
    level: 'Construindo',
    points: 1250,
    streak: 7,
  }

  const savingsRate = ((mockData.savings / mockData.totalIncome) * 100).toFixed(1)
  const emergencyFundProgress = ((mockData.emergencyFund / mockData.emergencyFundGoal) * 100).toFixed(0)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="mb-6 animate-in">
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Olá, Usuário!
          </h1>
          <p className="text-text-secondary">
            Veja sua saúde financeira de forma rápida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <Card className="animate-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Receita Mensal</span>
                <TrendingUp className="w-5 h-5 text-success" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono text-success">
                {showValues ? formatCurrency(mockData.totalIncome) : maskValue(showValues, formatCurrency(mockData.totalIncome))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Despesas Mensais</span>
                <TrendingDown className="w-5 h-5 text-error" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono text-error">
                {showValues ? formatCurrency(mockData.totalExpenses) : maskValue(showValues, formatCurrency(mockData.totalExpenses))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-secondary">Taxa de Poupança</span>
                <PiggyBank className="w-5 h-5 text-neon-cyan" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono text-neon-cyan">
                {savingsRate}%
              </div>
              <p className="text-sm text-text-secondary mt-1">
                Meta: <span className="font-mono text-neon-pink">20%</span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="animate-in" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Reserva de Emergência
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-secondary text-sm">Progresso</span>
                    <span className="text-text-primary font-semibold">{emergencyFundProgress}%</span>
                  </div>
                  <div className="w-full h-3 bg-bg-interactive rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-success transition-all duration-1000"
                      style={{ width: `${emergencyFundProgress}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-text-secondary">Atual</p>
                    <p className="text-lg font-bold font-mono text-neon-green">
                      {showValues ? formatCurrency(mockData.emergencyFund) : maskValue(showValues, formatCurrency(mockData.emergencyFund))}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-secondary">Meta</p>
                    <p className="text-lg font-bold font-mono text-primary">
                      {showValues ? formatCurrency(mockData.emergencyFundGoal) : maskValue(showValues, formatCurrency(mockData.emergencyFundGoal))}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle>Status de Gamificação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neon-orange/10 border border-neon-orange/30 rounded-xl">
                  <div>
                    <p className="text-sm text-text-secondary">Nível Atual</p>
                    <p className="text-2xl font-bold text-neon-orange">{mockData.level}</p>
                  </div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-orange to-warning-hover flex items-center justify-center">
                    <span className="text-2xl font-bold font-mono text-white">{mockData.points}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-neon-pink/10 border border-neon-pink/30 rounded-xl">
                  <Flame className="w-8 h-8 text-neon-pink animate-pulse" />
                  <div>
                    <p className="text-sm text-text-secondary">Sequência Ativa</p>
                    <p className="text-xl font-bold font-mono text-neon-pink">{mockData.streak} dias</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
