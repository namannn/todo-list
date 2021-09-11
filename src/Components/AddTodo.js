import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");

        }else{
        props.addTodo(title, desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Enter Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} placeholder="Enter Description" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}

export default AddTodo
