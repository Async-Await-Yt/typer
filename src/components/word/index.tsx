import { useEffect, useState } from 'react'
import './word.scss'

const Word = ({ word, setWords, index, setHealth, current, type, setType }) => {

    const [top, setTop] = useState(-10 * (index))
    const [left] = useState(Math.random() * 90 + 1)

    const setColor = (letter, index) => letter === type.split('')[index] && '#F9D949'

    useEffect(() => {
        const interval = setInterval(() => setTop(prev => prev + 1), 200)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (top >= 72) {
            setWords(prev => prev.map((w) => w == word ? '+' : w))
            setHealth(prev => prev - 1)
            setType('')
        }
    }, [top])

    return (
        <div
            id='word'
            style={{top: top + 'vh',left: left + 'vw'}}
            className={word === current ? 'active': ''}
        >
            {word.split('').map((letter:string,index:number) => {
                return <span key={index} style={word === current ? {color: setColor(letter, index)}: {}}>{ letter }</span>
        })}
        </div>
    )
}

export default Word