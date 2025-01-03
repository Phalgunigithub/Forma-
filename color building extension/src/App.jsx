import { useState } from 'react'
import { Forma } from 'forma-embedded-view-sdk/auto'
import './App.css'
import ColorBuildings from './components/ColorBuildings'


function App() {

  return (
    <>
  
    hello {Forma.getProjectId()}
    <ColorBuildings></ColorBuildings>
    </>
  )
}

export default App
