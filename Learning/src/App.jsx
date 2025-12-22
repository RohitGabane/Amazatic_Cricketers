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

export default function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamDetails />} />
          <Route path="/fixtures" element={<Fixtures />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}
