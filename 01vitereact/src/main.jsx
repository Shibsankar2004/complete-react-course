import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  )

}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     Children:'Click me to visit google'
// }


const anotherElement=(
  <a href="https://google.com" target='_blank'>Visite google</a>
)

const anotherusername="chai aur react"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherusername
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
