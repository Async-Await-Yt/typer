import { useEffect } from "react"
import { useGameState } from "../../hooks/context"
import { FaHeartBroken, FaHeart } from "react-icons/fa"
import './bottom.scss'

const Bottom = ({ health }) => {
    const { setGameState } = useGameState()

    useEffect(() => {
        if (health == 0) {
            setGameState('result')
        }
    }, [health])

    return (
        <footer>
            {[...Array(3)].map(
                (_, index) => (index + 1) <= health
                    ?
                    <FaHeart id="icon" key={index} />
                    :
                    <FaHeartBroken id="icon" key={index} />
            )
            }
        </footer>
    )
}

export default Bottom