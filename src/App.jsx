import './index.css'
import './App.css'

//--------------------------------------------------------------
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import { useState } from 'react'
import AddToDo from './components/AddToDo'
import SnackBar from './components/SnackBar'

function App() {
  
  const [toDos, setToDos] = useState([])

  
  const addToDo = (input) =>{

    const toDoObject = {
       id:Date.now(),
       task: input,
       completed: false
    }

    setToDos([...toDos, toDoObject]);   
    showSnackBar('Adicionado');
  };

  const delToDo = (id)=>{
    const confirmation = confirm('Tem certeza que deseja deletar?');

    if(confirmation){
      setToDos( toDos.filter(toDo=> toDo.id !== id) );   
      showSnackBar('Excluído');
    }
  }

  const markComplete = (id)=>{
    
    //finding the matching toDo and marking it complete
    setToDos( toDos.map( (toDo)=> toDo.id === id?  {...toDo,  completed: !toDo.completed}: toDo)  )
    
  }
  
  const editToDo = (id, updatedTask)=>{
     
    setToDos( toDos.map( (toDo)=> toDo.id === id? {...toDo, task:updatedTask}: toDo ) )
    showSnackBar('Tarefa editada');


  }
   

  const [snackBarMsg , setSnackbarMsg] = useState('');
  const [snackBarOpen, setSnackbarOpen] = useState(false);

  const showSnackBar = (message)=>{
    
    setSnackbarMsg(message);
    setSnackbarOpen(true);

    setTimeout(()=>{
      setSnackbarOpen(false);
    },5000)
  }

  return (
      
    <div className='min-h-screen'>

      <div className='w-full'>

      <Header></Header>
      
      <AddToDo  addToDo = {addToDo} showSnackBar={showSnackBar}></AddToDo>

      <ToDoList  key={toDos.id} itemsToDo = {toDos} deleteToDo={delToDo} markComplete = {markComplete} editToDo={editToDo}> </ToDoList>
      
      {snackBarOpen && (  <SnackBar message={snackBarMsg}  close = {()=> setSnackbarOpen(false)} />) }
  
      
      </div>

    </div>
  )
}

export default App
