import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<main className="home">
			<h1>Welcome to Amazatic Cricket</h1>
			<p>Official corporate website showcasing our six franchise teams and players.</p>
			<div className="home-actions">
				<Link to="/teams" className="btn">Explore Teams</Link>
			</div>
		</main>
	)
}