import { useEffect, useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todo, setTodo] = useState("");
  const [addTodo, setAddTodo] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleClick = () => {
    setAddTodo((pv) => {
      return [...pv,todo];
    })
    setTodo("")
  }

  // for adding item when enter is pressed
  useEffect(()=>{
    const keyDownHandler = event => {
      if(event.key === 'Enter'){
        handleClick();
        // event.preventDefault();
      }
    };
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  },);

  const handleDelete = (i) =>{
    setAddTodo((pv) => {
      return pv.filter((ele,index)=>{
        return index !== i;
      })
    })
  }
  return (
    <div className="App">
     <h1>To-Do List</h1>
     <input 
     type="text"
     value={todo}
     onChange={handleChange}
      />
     <button onClick={handleClick} className='add-btn'>Add</button>

     <div className='bdy'>
      <ul>
      {
        addTodo.map((x,index)=>   ( 
                 <TodoList key={index} id={index} data={x} handleDelete={handleDelete}/>  
                 )
        )
      }
        
       
      </ul>
     </div>
    </div>
  );
}

export default App;
