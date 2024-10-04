import components from '../../components'
import { useGameState } from '../../hooks/context'
import './result.scss'
const { Button } = components

const Result = () => {
  const { score } = useGameState()
  
  return (
    <main id='game-over'>
      <h3 className="score">{score}</h3>
       <Button label='try again' set='game'  />
    </main>
  )
}

export default Result