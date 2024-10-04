import './start.scss'
import components from '../../components'

const {Title, Button} = components

const Start = () => {
  
  return (
    <main id="start">
      <Title />
      <Button label='start' set='game' />
    </main>
  )
}

export default Start