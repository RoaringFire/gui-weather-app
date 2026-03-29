import { BrowserRouter } from 'react-router-dom'

import './App.css'
import HomePage from "./HomePage.jsx";
import LocationPrompt from './components/LocationPrompt.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HomePage /> testing the location prompt right now - maybe uncomment this and find a way to make the location and home page work together */}
        <LocationPrompt />
      </BrowserRouter>
    </>
  )
}


export default App