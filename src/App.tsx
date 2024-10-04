import { useState } from 'react'
import pages from "./pages"
import { useGameState } from './hooks/context'

const { Game, Result, Start } = pages

const App = () => {
  const {gameState} = useGameState()
  
  switch (gameState) {
    case 'start':
      return <Start />
    case 'game':
      return <Game />
    case 'result':
      return <Result />
  }
}



export default App
