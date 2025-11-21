import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { BookOpen, Video, Calendar, User } from 'lucide-react'

export const Academy: React.FC = () => {
  const courses = [
    { id: 1, title: 'Fundamentos da Educação Financeira', progress: 75, lessons: 12, duration: '3h 45min' },
    { id: 2, title: 'Investimentos para Iniciantes', progress: 45, lessons: 15, duration: '5h 20min' },
    { id: 3, title: 'Como Sair das Dívidas', progress: 100, lessons: 8, duration: '2h 30min' },
    { id: 4, title: 'Planejamento de Aposentadoria', progress: 30, lessons: 20, duration: '7h 15min' },
    { id: 5, title: 'Renda Passiva: Primeiros Passos', progress: 60, lessons: 10, duration: '4h 10min' },
  ]

  const videos = [
    { id: 1, title: '5 Dicas para Economizar Todo Mês', duration: '12:45', views: 1234 },
    { id: 2, title: 'Como Criar um Orçamento Realista', duration: '18:30', views: 2456 },
    { id: 3, title: 'Investimentos: Por Onde Começar?', duration: '25:15', views: 3421 },
    { id: 4, title: 'Reserva de Emergência: Guia Completo', duration: '15:20', views: 1876 },
    { id: 5, title: 'Organização Financeira em 30 Dias', duration: '22:10', views: 2987 },
  ]

  const events = [
    { id: 1, title: 'Workshop: Planejamento Financeiro 2024', date: '15/03/2024', time: '19:00', spots: 25 },
    { id: 2, title: 'Webinar: Investimentos em Renda Fixa', date: '22/03/2024', time: '20:00', spots: 50 },
    { id: 3, title: 'Masterclass: Independência Financeira', date: '05/04/2024', time: '18:30', spots: 30 },
    { id: 4, title: 'Live: Tire suas Dúvidas Financeiras', date: '12/04/2024', time: '19:30', spots: 100 },
    { id: 5, title: 'Workshop: Mercado de Ações', date: '20/04/2024', time: '19:00', spots: 40 },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6 animate-in">
          Academy
        </h1>

        <div className="space-y-6">
          <Card className="animate-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Cursos em Andamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courses.map((course) => (
                  <div key={course.id} className="p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-text-primary">{course.title}</h3>
                      <span className="text-sm text-text-secondary">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-1">
                        <div className="w-full h-2 bg-bg-secondary rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all ${course.progress === 100 ? 'bg-neon-green' : 'bg-gradient-to-r from-neon-cyan to-neon-purple'}`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm font-semibold font-mono text-neon-cyan">{course.progress}%</span>
                    </div>
                    <p className="text-xs text-text-tertiary"><span className="font-mono text-neon-pink">{course.lessons}</span> aulas</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5 text-primary" />
                Vídeos Populares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {videos.map((video) => (
                  <div key={video.id} className="flex items-center justify-between p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Video className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-text-primary">{video.title}</p>
                        <p className="text-xs text-text-tertiary"><span className="font-mono text-neon-purple">{video.views.toLocaleString('pt-BR')}</span> visualizações</p>
                      </div>
                    </div>
                    <span className="text-sm font-mono text-neon-cyan">{video.duration}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Próximos Eventos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {events.map((event) => (
                  <div key={event.id} className="p-3 bg-bg-tertiary rounded-lg hover:bg-bg-interactive transition-colors">
                    <h3 className="font-semibold text-text-primary mb-1">{event.title}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <div className="text-text-secondary font-mono">
                        <span>{event.date}</span> • <span className="text-neon-pink">{event.time}</span>
                      </div>
                      <div className="text-neon-green font-semibold font-mono">
                        {event.spots} vagas
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-in" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Meu Mentor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-lg">Carlos Mendes</h3>
                  <p className="text-sm text-text-secondary">Especialista em Planejamento Financeiro</p>
                  <p className="text-xs text-text-tertiary mt-1">Próxima sessão: 18/03/2024 às 14:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
