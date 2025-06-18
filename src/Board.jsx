import {Link} from 'react-router' // added
//added link element in const


const Board = ({id, title, category}) => {
    return (<div className="board">
    <h1>{title}</h1>
    <h2>{category}</h2>
    <p>ID: {id}</p>
    <Link to={`/board-details/${id}`} state={{ title:title, category:category}}>View Board</Link>
    </div>)
}

export default Board
