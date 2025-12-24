import React, { useState } from 'react'
import SquadModal from './SquadModal'
import teams from '../data/teamsData'
import '../styles/fixture.css'

export default function FixtureCard({ homeTeam, awayTeam, venue, fixture, status, score }) {
  const [open, setOpen] = useState(false)

  // resolve ids from provided team objects when possible
  const homeId = homeTeam?.id || teams.find(t => t.name === homeTeam?.name)?.id
  const awayId = awayTeam?.id || teams.find(t => t.name === awayTeam?.name)?.id

  return (
    <>
      <article
        className="fixture-card cb-card"
        onClick={(e) => { e.preventDefault(); setTimeout(() => setOpen(true), 0); }}
        role="button"
        tabIndex={0}
      >
        <div className="fixture-top">
          <div className="fixture-teams">
            <div className="fixture-team">
              {homeTeam.logo && <img src={homeTeam.logo} alt={homeTeam.name} className="fixture-team-logo"/>}
              <div className="fixture-team-name">{homeTeam.name}</div>
              {score && score.home && <div className="fixture-team-score">{score.home}</div>}
            </div>

            <div className="fixture-vs">v</div>

            <div className="fixture-team">
              {awayTeam.logo && <img src={awayTeam.logo} alt={awayTeam.name} className="fixture-team-logo"/>}
              <div className="fixture-team-name">{awayTeam.name}</div>
              {score && score.away && <div className="fixture-team-score muted">{score.away}</div>}
            </div>
          </div>

          <div className={`fixture-status ${status ? status.toLowerCase().replace(/\s+/g, '-') : 'scheduled'}`}>
            {status || 'Scheduled'}
          </div>
        </div>

        <div className="fixture-meta">
          <div>{fixture.date} • {fixture.time}</div>
          <div className="muted">{venue ? `${venue.name} — ${venue.city}` : 'TBD'}</div>
        </div>
      </article>

      {open && (
        <SquadModal homeId={homeId} awayId={awayId} onClose={() => setOpen(false)} />
      )}
    </>
  )
}
