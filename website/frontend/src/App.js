import React from 'react'
// import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Books from './pages/Books'
import Coaching from './pages/Coaching'
import Newsletter from './pages/Newsletter'
import Podcasts from './pages/Podcasts'
import Speeches from './pages/Speeches'
import Story from './pages/Story'

import SingleNewsletter from './pages/SingleNewsletter'


// import { library } from '@fortawesome/fontawesome-svg-core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, far, fas)

function App() {

  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/books' element={<Books />} />
        <Route path='/speeches' element={<Speeches />} />
        <Route path='/story' element={<Story />} />
        <Route path='/podcasts' element={<Podcasts />} />
        <Route path='/newsletters' element={<Newsletter />} />
        <Route path='/coaching' element={<Coaching />} />
        <Route path='/newsletters/:nl_id' element={<SingleNewsletter />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
