import './title.scss'

const Title = () => {
    const head = ['t', 'y', 'p', 'e', 'r', '_']

    return <main className="title">
        {head.map((letter, index) => <span key={index}>{letter}</span>)}
    </main>
}
export default Title