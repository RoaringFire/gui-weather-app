import { BrowserRouter } from 'react-router-dom'

import './App.css'
import HomePage from './HomePage.jsx';
import LocationPrompt from './components/LocationPrompt.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <HomePage />  */}
        <LocationPrompt />
      </BrowserRouter>
    </>
  )
}


export default App