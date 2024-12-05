import React from 'react'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Location_Map from './components/Location_Map/Location_Map'

const App = () => {
  return (
    <div className='app'>
      <Location_Map></Location_Map>
    </div>
  )
}

export default App