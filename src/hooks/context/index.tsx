import { createContext, useContext, useState } from "react";

const Game = createContext('start')

const GameProvider = ({ children }) => {

    const [gameState, setGameState] = useState('start')
    const [score, setScore] = useState<number>(0)

    return <Game.Provider value={{ gameState, setGameState, score, setScore }}>
        {children}
    </Game.Provider>
}

const useGameState = () => useContext(Game)

export {useGameState, GameProvider}
