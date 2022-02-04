import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import AddTodo from './Components/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About';
import Headroom from 'react-headroom';
import { Container } from 'react-bootstrap';

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));

  }

  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    console.log("I am adding this todo", sno, title, desc);
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Headroom>
          <Header title="My Todos" searchBar={true} />
        </Headroom>

        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;