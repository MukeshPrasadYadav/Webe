// client/src/App.tsx

import './App.css'
import { Header } from './components/normal_components/Header'
import { Button } from './components/ui/button'

function App() {

  return (
    
    <>
    <Header />
    <h1 className='text-red-600 text-center'>Hello </h1>
    <Button  variant='default'>Click Me</Button>
    <Button variant ="secondary">Click Me</Button>
    </>
  )
}

export default App
