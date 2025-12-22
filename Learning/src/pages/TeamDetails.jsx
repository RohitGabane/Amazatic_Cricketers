import React from 'react'
import { useParams, Link } from 'react-router-dom'
import teams from '../data/teamsData'
import PlayerCard from '../components/PlayerCard'

export default function TeamDetails() {
  const { teamId } = useParams()
  const team = teams.find((t) => t.id === teamId)

  if (!team) {
    return (
      <main>
        <h2>Team not found</h2>
        <Link to="/teams" className="btn">Back to teams</Link>
      </main>
    )
  }

  return (
    <main>
      <header className="team-detail-header" style={{borderColor: team.colors[0]}}>
        <div className="team-detail-top">
          {team.logo && <img src={team.logo} alt={`${team.name} logo`} className="team-logo-large" />}
          <div>
            <h2>{team.name}</h2>
            <p className="muted">{team.city}</p>
            <p>{team.description}</p>
          </div>
        </div>
      </header>

      <section>
        <h3>Players</h3>
        <div className="player-grid">
          {team.players.map((p) => (
            <PlayerCard key={p.id} name={p.name} player={p} />
          ))}
        </div>
      </section>
      <div style={{marginTop:20}}>
        <Link to="/teams" className="btn">Back to Teams</Link>
      </div>
    </main>
  )
}
