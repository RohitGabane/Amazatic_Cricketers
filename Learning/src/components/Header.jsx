import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
	return (
		<header className="site-header">
			<div className="brand">Amazatic Cricket</div>
			<nav>
				<NavLink to="/" end className={({isActive})=> isActive? 'nav-active':'nav-link'}>Home</NavLink>
				<NavLink to="/teams" className={({isActive})=> isActive? 'nav-active':'nav-link'}>Teams</NavLink>
				<NavLink to="/fixtures" className={({isActive})=> isActive? 'nav-active':'nav-link'}>Fixtures</NavLink>
				<NavLink to="/about" className={({isActive})=> isActive? 'nav-active':'nav-link'}>About</NavLink>
				<NavLink to="/contact" className={({isActive})=> isActive? 'nav-active':'nav-link'}>Contact</NavLink>
			</nav>
		</header>
	)
}