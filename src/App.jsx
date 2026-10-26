import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'

// Home loads up front for the fastest first paint; other pages are code-split.
const About = lazy(() => import('./pages/About.jsx'))
const Admissions = lazy(() => import('./pages/Admissions.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Suspense fallback={null}><About /></Suspense>} />
        <Route path="admissions" element={<Suspense fallback={null}><Admissions /></Suspense>} />
        <Route path="contact" element={<Suspense fallback={null}><Contact /></Suspense>} />
        <Route path="*" element={<Suspense fallback={null}><NotFound /></Suspense>} />
      </Route>
    </Routes>
  )
}
