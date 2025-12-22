import React from 'react'
import { Link } from 'react-router-dom'

export default function TeamCard({ team }) {
  return (
    <article className="team-card">
      <div className="team-header" style={{background: team.colors[0]}}>
        {team.logo && <img src={team.logo} alt={`${team.name} logo`} className="team-logo" />}
        <h3>{team.name}</h3>
        <small>{team.city}</small>
      </div>
      <p className="team-desc">{team.description}</p>
      <div className="team-actions">
        <Link to={`/teams/${team.id}`} className="btn">View Team</Link>
      </div>
    </article>
  )
}
