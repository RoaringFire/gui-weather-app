import { useState } from 'react'
import './App.css'
import Settings from './components/settings/settings.jsx'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div>
      {page !== 'settings' && (
        <nav className='navigation_panel'>
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('settings')}>Settings</button>
        </nav>
      )}
 

      {page === 'home' && (
        <div>
          <h1>Weather App</h1>
          <p>Main weather page content goes here</p>
        </div>
      )}

      {page === 'settings' && (
        <Settings goBack = {() => setPage('home')} />
      )}
    </div>

  )
}


export default App
