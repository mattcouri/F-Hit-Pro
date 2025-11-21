import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardContent } from '../components/ui/Card'
import { FileText, Download, Bot, BarChart } from 'lucide-react'

export const Tools: React.FC = () => {
  const tools = [
    { icon: FileText, title: 'Relatório Mensal', description: 'Resumo completo do mês', items: 12 },
    { icon: Download, title: 'Extrato Detalhado', description: 'Download em PDF/Excel', items: 8 },
    { icon: Bot, title: 'Assessor Inteligente', description: 'Chat com IA financeira', items: 24 },
    { icon: BarChart, title: 'Dashboard Analytics', description: 'Análise visual de gastos', items: 15 },
    { icon: FileText, title: 'Relatório Anual', description: 'Visão anual completa', items: 5 },
    { icon: Download, title: 'Comprovantes', description: 'Download de comprovantes', items: 45 },
    { icon: Bot, title: 'Planejamento Assistido', description: 'IA te ajuda a planejar', items: 10 },
    { icon: BarChart, title: 'Comparativo Mensal', description: 'Compare seus meses', items: 12 },
    { icon: FileText, title: 'Relatório de Investimentos', description: 'Performance dos investimentos', items: 18 },
    { icon: Download, title: 'Backup de Dados', description: 'Exporte todos seus dados', items: 3 },
    { icon: Bot, title: 'Dicas Personalizadas', description: 'Receba dicas diárias', items: 30 },
    { icon: BarChart, title: 'Projeção Futura', description: 'Simulações financeiras', items: 6 },
    { icon: FileText, title: 'Relatório de Metas', description: 'Acompanhe suas metas', items: 8 },
    { icon: Download, title: 'Exportar Impostos', description: 'Dados para IR', items: 4 },
    { icon: Bot, title: 'Consultor Virtual', description: 'Tire dúvidas financeiras', items: 50 },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6 animate-in">
          Ferramentas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card
                key={tool.title}
                hover
                className="animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{tool.title}</h3>
                        <p className="text-sm text-text-secondary">{tool.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold font-mono text-neon-green">{tool.items}</div>
                      <p className="text-xs text-text-tertiary">disponíveis</p>
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
