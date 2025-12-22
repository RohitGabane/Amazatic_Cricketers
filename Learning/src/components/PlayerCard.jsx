import React from 'react'

export default function PlayerCard({ player }) {
  return (
    <div className="player-card">
      {player.photo && <img src={player.photo} alt={player.name} className="player-photo" />}
      <div className="player-top">
        <div className="player-name">{player.name}</div>
        <div className="player-number">#{player.number}</div>
      </div>
      <div className="player-role">{player.role}</div>
    </div>
  )
}
