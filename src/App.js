import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion'
import { useState } from 'react';


const EmojiThrower = ({ emoji  }) => {
  const randomX = Math.random() * (window.innerWidth - 100)
  return (
      <motion.div
          z-index={100}
          initial={{ y: '100vh', x: randomX, opacity: 1, position: 'absolute' }}
          animate={{ opacity: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
      >
          <p style={{ fontSize: '40px' }}>{emoji}</p>
      </motion.div>
  )
}


function App() {
  const [emote, setEmote] = useState([])
  const handleClick = () => { setEmote([...emote, 1])}

  return (
      <div className="App">
      <div style={
              { display: 'flex', justifyContent: 'flex-end' }
          }>
              <button onMouseOver={handleClick}>
                  Money Money 
              </button>
          </div>
              {emote.map((item, i) => {
                  return <EmojiThrower emoji={'💰'} key={i} />
              })}
      </div>
  )
}

export default App;
