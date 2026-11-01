import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'


// Main App Component
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,3,4]

  return (
    <>
              <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
                Tailwind Test
              </h1>
           
           <Card username="react aur code" btnText="click me" />
           <Card username="shibsankar" />
    </>
  )
}

export default App





