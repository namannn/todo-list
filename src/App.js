import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import Footer from './Components/Footer';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo.sno);
  }

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym"
    },
    {
      sno: 3,
      title: "Go to the mall",
      desc: "You need to go to the mall"
    }
  ]
  return (
    <div>
      <Header title="My Todos" searchBar={true}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;