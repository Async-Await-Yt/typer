import { useGameState } from "../../hooks/context"
import './button.scss'

const Button = ({ label, set }) => {
    const { setGameState } = useGameState()
    
  return (
      <button onClick={()=> setGameState(set)}>
          {label}
    </button>
  )
}

export default Button