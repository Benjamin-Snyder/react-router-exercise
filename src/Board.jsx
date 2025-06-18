
const Board = ({id, title, category}) => {
    return (<div className="board">
    <h1>{title}</h1>
    <h2>{category}</h2>
    <p>ID: {id}</p>
    </div>)
}

export default Board