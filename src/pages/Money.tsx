import React, { useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { TrendingUp, TrendingDown, PiggyBank, BarChart3 } from 'lucide-react'

type Tab = 'income' | 'expenses' | 'savings' | 'budget'

export const Money: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('income')

  const tabs = [
    { id: 'income', label: 'ENTRADAS', icon: TrendingUp },
    { id: 'expenses', label: 'SAÍDAS', icon: TrendingDown },
    { id: 'savings', label: 'SAVINGS', icon: PiggyBank },
    { id: 'budget', label: 'ORÇAMENTO', icon: BarChart3 },
  ]

  const incomeData = [
    { id: 1, date: '2024-01-15', description: 'Salário', category: 'Trabalho', amount: 5000 },
    { id: 2, date: '2024-01-20', description: 'Freelance', category: 'Trabalho', amount: 1200 },
    { id: 3, date: '2024-01-22', description: 'Investimentos', category: 'Rendimentos', amount: 350 },
    { id: 4, date: '2024-01-25', description: 'Aluguel recebido', category: 'Imóveis', amount: 800 },
    { id: 5, date: '2024-01-28', description: 'Bônus', category: 'Trabalho', amount: 500 },
    { id: 6, date: '2024-02-01', description: 'Projeto extra', category: 'Trabalho', amount: 600 },
    { id: 7, date: '2024-02-05', description: 'Consultoria', category: 'Trabalho', amount: 900 },
    { id: 8, date: '2024-02-10', description: 'Dividendos', category: 'Investimentos', amount: 250 },
    { id: 9, date: '2024-02-12', description: 'Venda produto', category: 'Vendas', amount: 450 },
    { id: 10, date: '2024-02-15', description: 'Salário', category: 'Trabalho', amount: 5000 },
    { id: 11, date: '2024-02-18', description: 'Comissão', category: 'Trabalho', amount: 700 },
    { id: 12, date: '2024-02-20', description: 'Investimentos', category: 'Rendimentos', amount: 380 },
    { id: 13, date: '2024-02-22', description: 'Freelance', category: 'Trabalho', amount: 1100 },
    { id: 14, date: '2024-02-25', description: 'Aluguel recebido', category: 'Imóveis', amount: 800 },
    { id: 15, date: '2024-02-28', description: 'Consultoria', category: 'Trabalho', amount: 950 },
  ]

  const expensesData = [
    { id: 1, date: '2024-01-03', description: 'Aluguel', category: 'Moradia', amount: 1500 },
    { id: 2, date: '2024-01-05', description: 'Supermercado', category: 'Alimentação', amount: 450 },
    { id: 3, date: '2024-01-07', description: 'Conta de luz', category: 'Contas', amount: 120 },
    { id: 4, date: '2024-01-10', description: 'Internet', category: 'Contas', amount: 100 },
    { id: 5, date: '2024-01-12', description: 'Academia', category: 'Saúde', amount: 150 },
    { id: 6, date: '2024-01-15', description: 'Restaurante', category: 'Alimentação', amount: 80 },
    { id: 7, date: '2024-01-18', description: 'Transporte', category: 'Mobilidade', amount: 200 },
    { id: 8, date: '2024-01-20', description: 'Farmácia', category: 'Saúde', amount: 60 },
    { id: 9, date: '2024-01-22', description: 'Streaming', category: 'Entretenimento', amount: 50 },
    { id: 10, date: '2024-01-25', description: 'Supermercado', category: 'Alimentação', amount: 380 },
    { id: 11, date: '2024-01-28', description: 'Gasolina', category: 'Mobilidade', amount: 250 },
    { id: 12, date: '2024-02-02', description: 'Conta de água', category: 'Contas', amount: 80 },
    { id: 13, date: '2024-02-05', description: 'Aluguel', category: 'Moradia', amount: 1500 },
    { id: 14, date: '2024-02-08', description: 'Supermercado', category: 'Alimentação', amount: 420 },
    { id: 15, date: '2024-02-10', description: 'Jantar', category: 'Alimentação', amount: 120 },
  ]

  const savingsData = [
    { id: 1, date: '2024-01-15', description: 'Investimento CDB', category: 'Renda Fixa', amount: 1000 },
    { id: 2, date: '2024-01-15', description: 'Tesouro Direto', category: 'Renda Fixa', amount: 500 },
    { id: 3, date: '2024-01-20', description: 'Ações', category: 'Renda Variável', amount: 300 },
    { id: 4, date: '2024-01-25', description: 'Reserva de Emergência', category: 'Poupança', amount: 800 },
    { id: 5, date: '2024-02-01', description: 'Fundos Imobiliários', category: 'Renda Variável', amount: 400 },
    { id: 6, date: '2024-02-05', description: 'LCI', category: 'Renda Fixa', amount: 600 },
    { id: 7, date: '2024-02-10', description: 'ETFs', category: 'Renda Variável', amount: 350 },
    { id: 8, date: '2024-02-15', description: 'Investimento CDB', category: 'Renda Fixa', amount: 1000 },
    { id: 9, date: '2024-02-15', description: 'Tesouro Direto', category: 'Renda Fixa', amount: 500 },
    { id: 10, date: '2024-02-18', description: 'Ações', category: 'Renda Variável', amount: 450 },
    { id: 11, date: '2024-02-20', description: 'Criptomoedas', category: 'Renda Variável', amount: 200 },
    { id: 12, date: '2024-02-22', description: 'Reserva de Emergência', category: 'Poupança', amount: 800 },
    { id: 13, date: '2024-02-25', description: 'LCA', category: 'Renda Fixa', amount: 700 },
    { id: 14, date: '2024-02-27', description: 'Fundos Imobiliários', category: 'Renda Variável', amount: 400 },
    { id: 15, date: '2024-02-28', description: 'Previdência Privada', category: 'Previdência', amount: 550 },
  ]

  const budgetData = [
    { id: 1, category: 'Moradia', budgeted: 1500, spent: 1500, remaining: 0 },
    { id: 2, category: 'Alimentação', budgeted: 800, spent: 650, remaining: 150 },
    { id: 3, category: 'Transporte', budgeted: 500, spent: 450, remaining: 50 },
    { id: 4, category: 'Saúde', budgeted: 300, spent: 210, remaining: 90 },
    { id: 5, category: 'Educação', budgeted: 400, spent: 400, remaining: 0 },
    { id: 6, category: 'Lazer', budgeted: 300, spent: 250, remaining: 50 },
    { id: 7, category: 'Contas', budgeted: 350, spent: 300, remaining: 50 },
    { id: 8, category: 'Vestuário', budgeted: 200, spent: 120, remaining: 80 },
    { id: 9, category: 'Beleza', budgeted: 150, spent: 100, remaining: 50 },
    { id: 10, category: 'Pet', budgeted: 180, spent: 180, remaining: 0 },
    { id: 11, category: 'Presentes', budgeted: 100, spent: 80, remaining: 20 },
    { id: 12, category: 'Doações', budgeted: 100, spent: 100, remaining: 0 },
    { id: 13, category: 'Seguros', budgeted: 250, spent: 250, remaining: 0 },
    { id: 14, category: 'Investimentos', budgeted: 1000, spent: 1000, remaining: 0 },
    { id: 15, category: 'Emergência', budgeted: 500, spent: 0, remaining: 500 },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6 animate-in">
          Meu Dinheiro
        </h1>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm whitespace-nowrap
                  transition-all duration-200 flex items-center gap-2
                  ${activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-bg-secondary text-text-secondary hover:bg-bg-tertiary'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        <Card className="animate-in">
          <CardHeader>
            <CardTitle>
              {tabs.find(t => t.id === activeTab)?.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activeTab === 'income' && (
              <div className="space-y-2">
                {incomeData.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{item.description}</p>
                      <p className="text-sm text-text-secondary">{item.category} • {item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold font-mono text-success">+R$ {item.amount.toLocaleString('pt-BR')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'expenses' && (
              <div className="space-y-2">
                {expensesData.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{item.description}</p>
                      <p className="text-sm text-text-secondary">{item.category} • {item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold font-mono text-error">-R$ {item.amount.toLocaleString('pt-BR')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'savings' && (
              <div className="space-y-2">
                {savingsData.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{item.description}</p>
                      <p className="text-sm text-text-secondary">{item.category} • {item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold font-mono text-neon-purple">R$ {item.amount.toLocaleString('pt-BR')}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'budget' && (
              <div className="space-y-2">
                {budgetData.map((item) => {
                  const percentage = (item.spent / item.budgeted) * 100
                  return (
                    <div key={item.id} className="p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-text-primary">{item.category}</p>
                        <p className="text-sm font-mono font-bold text-neon-cyan">{percentage.toFixed(0)}%</p>
                      </div>
                      <div className="w-full h-2 bg-bg-secondary rounded-full overflow-hidden mb-1">
                        <div
                          className={`h-full transition-all ${percentage > 90 ? 'bg-error' : percentage > 70 ? 'bg-neon-yellow' : 'bg-success'}`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-text-tertiary font-mono">
                        <span>Gasto: <span className="text-neon-orange">R$ {item.spent.toLocaleString('pt-BR')}</span></span>
                        <span>Orçado: <span className="text-primary">R$ {item.budgeted.toLocaleString('pt-BR')}</span></span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
