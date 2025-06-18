import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './Board'

function App() {
  const [boards, setBoards] = useState([
    {id: 0, title: "Happy Birthday!!!", category: "Celebration"},
    {id: 1, title: "Congratulations", category: "Celebration"},
    {id: 2, title: "Good luck", category: "Inspiration"},
    {id: 3, title: "Happy Anniversary", category: "Celebration"}])

  return (
    <>
    <h1>Kudos Board</h1>
    <div className="boards-container">
      {boards.map((board) => <Board key={board.id} id={board.id} title={board.title} category={board.category}/>)}
    </div>
    </>
  )
}

export default App
