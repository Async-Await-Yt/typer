import { createRoot } from 'react-dom/client'
import { GameProvider } from './hooks/context'
import App from './App.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
    <GameProvider>
        <App />
    </GameProvider>
)
