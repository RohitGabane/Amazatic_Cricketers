import React from 'react'
import teams from '../data/teamsData'
import TeamCard from '../components/TeamCard'

export default function Teams() {
  return (
    <section>
      <h2>Our Teams</h2>
      <div className="team-grid">
        {teams.map((t) => (
          <TeamCard key={t.id} name={t.name} team={t} />
        ))}
      </div>
    </section>
  )
}
