import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const [user, setUser] = useState(() => {
		try {
			const raw = localStorage.getItem('cricket_user')
			return raw ? JSON.parse(raw) : null
		} catch (e) {
			return null
		}
	})

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		try {
			if (user) localStorage.setItem('cricket_user', JSON.stringify(user))
			else localStorage.removeItem('cricket_user')
		} catch (e) {
			// ignore
		}
	}, [user])

	const login = async ({ email, password }) => {
		setLoading(true)
		// Mock async login - replace with real API call
		await new Promise((r) => setTimeout(r, 600))
		const mockUser = { id: 'u1', name: email.split('@')[0] || 'User', email }
		setUser(mockUser)
		setLoading(false)
		return mockUser
	}

	const logout = () => {
		setUser(null)
	}

	const value = { user, loading, login, logout, isAuthenticated: !!user }

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
	const ctx = useContext(AuthContext)
	if (!ctx) throw new Error('useAuth must be used within AuthProvider')
	return ctx
}

export default AuthContext