import React from 'react'
import fixtures from '../data/fixtures'
import teams from '../data/teamsData'
import stadiums from '../data/stadiums'
import FixtureCard from '../components/FixtureCard'

export default function Fixtures() {
  return (
    <section>
      <h2>Upcoming Fixtures</h2>
      <div className="fixture-grid">
        {fixtures.map((f) => {
          const homeTeam = teams.find((t) => t.id === f.homeTeamId) || { name: f.homeTeamId }
          const awayTeam = teams.find((t) => t.id === f.awayTeamId) || { name: f.awayTeamId }
          const venue = stadiums.find((v) => v.id === f.venueId)
          return (
            <FixtureCard key={f.id} fixture={f} homeTeam={homeTeam} awayTeam={awayTeam} venue={venue} />
          )
        })}
      </div>
    </section>
  )
}
