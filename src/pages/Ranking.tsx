import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Trophy, Flame } from 'lucide-react'

export const Ranking: React.FC = () => {
  const userLevel = {
    name: 'Construindo',
    color: 'warning',
    points: 1250,
    level: 2,
    streak: 7
  }

  const topUsers = [
    { rank: 1, name: 'U***o A.', points: 5200, level: 'Independente', streak: 45 },
    { rank: 2, name: 'M***a S.', points: 4800, level: 'Independente', streak: 38 },
    { rank: 3, name: 'J***e L.', points: 3900, level: 'Estável', streak: 32 },
    { rank: 4, name: 'A***a M.', points: 3200, level: 'Estável', streak: 28 },
    { rank: 5, name: 'P***o R.', points: 2800, level: 'Estável', streak: 24 },
    { rank: 6, name: 'C***a B.', points: 2500, level: 'Construindo', streak: 21 },
    { rank: 7, name: 'F***o T.', points: 2200, level: 'Construindo', streak: 18 },
    { rank: 8, name: 'L***a K.', points: 2000, level: 'Construindo', streak: 15 },
    { rank: 9, name: 'R***o P.', points: 1800, level: 'Construindo', streak: 12 },
    { rank: 10, name: 'S***a N.', points: 1600, level: 'Construindo', streak: 10 },
    { rank: 11, name: 'T***o D.', points: 1450, level: 'Construindo', streak: 9 },
    { rank: 12, name: 'V***a G.', points: 1350, level: 'Construindo', streak: 8 },
    { rank: 13, name: 'W***o H.', points: 1250, level: 'Construindo', streak: 7 },
    { rank: 14, name: 'Y***a F.', points: 1150, level: 'Vulnerável', streak: 5 },
    { rank: 15, name: 'Z***o C.', points: 1050, level: 'Vulnerável', streak: 4 },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <h1 className="text-3xl font-bold text-text-primary mb-6 animate-in">
          Ranking
        </h1>

        <Card className="mb-6 animate-in" style={{ animationDelay: '100ms' }}>
          <CardHeader>
            <CardTitle>Seu Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl bg-${userLevel.color} flex items-center justify-center`}>
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">{userLevel.name}</p>
                  <p className="text-text-secondary">{userLevel.points} pontos</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl">
                <Flame className="w-6 h-6 text-primary animate-pulse" />
                <span className="text-xl font-bold text-primary">{userLevel.streak}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-in" style={{ animationDelay: '200ms' }}>
          <CardHeader>
            <CardTitle>Top 15 - Todos os Usuários</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topUsers.map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between p-4 bg-bg-tertiary rounded-xl hover:bg-bg-interactive transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center font-bold font-mono
                      ${user.rank === 1 ? 'bg-neon-yellow text-black' : ''}
                      ${user.rank === 2 ? 'bg-bg-secondary text-neon-cyan border-2 border-neon-cyan' : ''}
                      ${user.rank === 3 ? 'bg-neon-orange text-white' : ''}
                      ${user.rank > 3 ? 'bg-bg-secondary text-text-secondary' : ''}
                    `}>
                      {user.rank}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">{user.name}</p>
                      <p className="text-sm text-text-secondary">{user.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold font-mono text-neon-cyan">{user.points}</p>
                    <p className="text-xs text-text-tertiary">pontos</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
