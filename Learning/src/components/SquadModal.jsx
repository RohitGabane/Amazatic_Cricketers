import React from 'react'
import teams from '../data/teamsData'

export default function SquadModal({ homeId, awayId, onClose }) {
  const home = teams.find(t => t.id === homeId) || null
  const away = teams.find(t => t.id === awayId) || null

  return (
    <div className="squad-modal-backdrop" onClick={onClose}>
      <div className="squad-modal" onClick={(e) => e.stopPropagation()}>
        <button className="squad-close" onClick={onClose} aria-label="Close">×</button>
        <div className="squad-columns">
          {home && (
            <div className="squad-column">
              <h3 className="squad-team-name">{home.name}</h3>
              <ul className="squad-list">
                {home.players.map(p => (
                  <li key={p.id} className="squad-player">
                    <img src={p.photo} alt={p.name} className="player-photo"/>
                    <div className="player-info">
                      <div className="player-name">{p.name}</div>
                      <div className="player-role muted">{p.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {away && (
            <div className="squad-column">
              <h3 className="squad-team-name">{away.name}</h3>
              <ul className="squad-list">
                {away.players.map(p => (
                  <li key={p.id} className="squad-player">
                    <img src={p.photo} alt={p.name} className="player-photo"/>
                    <div className="player-info">
                      <div className="player-name">{p.name}</div>
                      <div className="player-role muted">{p.role}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
