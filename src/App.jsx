import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { AppData } from './components/AppData.jsx';
import LocationPrompt from './components/LocationPrompt.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppData children={
            <LocationPrompt />
        } />
      </BrowserRouter>
    </>
  )
}


export default App