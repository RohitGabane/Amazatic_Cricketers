import React from 'react'

export default function FixtureCard({ homeTeam, awayTeam, venue, fixture }) {
  return (
    <article className="fixture-card">
      <div className="fixture-teams">
        <div className="fixture-team">
          {homeTeam.logo && <img src={homeTeam.logo} alt={homeTeam.name} className="fixture-team-logo"/>}
          <div className="fixture-team-name">{homeTeam.name}</div>
        </div>
        <div className="fixture-vs">vs</div>
        <div className="fixture-team">
          {awayTeam.logo && <img src={awayTeam.logo} alt={awayTeam.name} className="fixture-team-logo"/>}
          <div className="fixture-team-name">{awayTeam.name}</div>
        </div>
      </div>

      <div className="fixture-meta">
        <div>{fixture.date} • {fixture.time}</div>
        <div className="muted">{venue ? `${venue.name} — ${venue.city}` : 'TBD'}</div>
      </div>
    </article>
  )
}
