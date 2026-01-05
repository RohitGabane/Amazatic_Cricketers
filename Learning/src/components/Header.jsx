import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'
import { useAuth } from '../context/AuthContext'

export default function Header() {
	const { user, logout, isAuthenticated } = useAuth()
	const navigate = useNavigate()

	const handleAuth = () => {
		if (isAuthenticated) {
			logout()
			navigate('/')
		} else {
			navigate('/login')
		}
	}

	return (
		<header className="site-header">
			<div className="brand">Amazatic Cricket</div>
			<nav>
				<NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>Home</NavLink>
				<NavLink to="/teams" className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>Teams</NavLink>
				<NavLink to="/fixtures" className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>Fixtures</NavLink>
				<NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>About</NavLink>
				<NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-active' : 'nav-link')}>Contact</NavLink>
			</nav>
			<div className="auth-area">
				{isAuthenticated && user ? <span className="user-greet">Hello, {user.name}</span> : null}
				<button className="auth-btn" onClick={handleAuth}>{isAuthenticated ? 'Logout' : 'Login'}</button>
			</div>
		</header>
	)
}