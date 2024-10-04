import components from "../../components"
import { generate } from "random-words"

import './game.scss'
import { useEffect, useState } from "react"
import { useGameState } from "../../hooks/context"

const { Word, Bottom, Header } = components

const Game = () => {
  const {setGameState, setScore} = useGameState()
  
  const [words, setWords] = useState<string[]>([...generate({ exactly: 50 })])
  const [current, setCurrent] = useState<string>('')
  const [type, setType] = useState("")
  const [health, setHealth] = useState<number>(3)
  
  const handleKey = (e) => {
        if(current.split('')[type.split('').length] === e.key)
        setType(prev => prev+e.key)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    return ()=> document.removeEventListener('keydown', handleKey)
  })

  useEffect(() => {
    setCurrent(words.find((word) => word !== '+'))
    if(words.every((w)=> w === '+')) setGameState('result')
  }, [words])

  useEffect(() => {
    if (type && current && type === current) {
      setScore(prev => ++prev)
      setWords(prev => prev.map((w) => w === current ? '+' : w))
      setType('')
    }
  }, [type])

  return (
    <>
      <Header />
      <main id="game">
        {
          words.map((word: string, index: number) => word !== '+' && (
            <Word
              key={index}
              index={index}
              word={word}
              setWords={setWords}
              setHealth={setHealth}
              current={current}
              setCurrent={setCurrent}
              type={type}
              setType={setType}
            />
          )
          )
        }
      </main>
      <Bottom health={health} />
    </>

  )
}

export default Game