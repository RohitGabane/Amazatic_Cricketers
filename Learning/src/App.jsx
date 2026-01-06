// # Main app component
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Teams from './pages/Teams'
import TeamDetails from './pages/TeamDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Fixtures from './pages/Fixtures'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/teams" element={<ProtectedRoute><Teams /></ProtectedRoute>} />
          <Route path="/teams/:teamId" element={<ProtectedRoute><TeamDetails /></ProtectedRoute>} />
          <Route path="/fixtures" element={<ProtectedRoute><Fixtures /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        </Routes>
      </main>
    </div>
  )
}
