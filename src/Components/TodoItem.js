import React from 'react'
import { Button } from 'react-bootstrap'

const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h5>{todo.sno}) {todo.title}</h5>
            <p>  {todo.desc}</p>
            <Button variant="danger btn-sm" onClick={onDelete}>Delete</Button>
        </div>
    )
}

export default TodoItem

