
import '../App.css';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

function ToDoItem({toDo, deleteToDo, markComplete ,editToDo}){
    const handleEdit = ()=> {
        const newTask = prompt("Editando...", toDo.task);     
            if(newTask !== null && newTask !== ''){        
                editToDo(toDo.id, newTask);              
            }
    }
    return (
        <li key={toDo.id} className= { `card border-2  border-gray-300 rounded-md h-auto  p-2 flex flex-col justify-between     ${toDo.completed? 'bg-green-400 line-through' : 'bg-white'} ` }>
            <h2 className='card-title w-22 text-center font-mono font-bold bg-yellow-200 rounded-lg text-sm'><span>Tarefa - <span className='text-xs'>{toDo.id}</span></span></h2>
                    <div className='h-52 flex justify-center items-center overflow-y-auto' >
                        {toDo.completed? 
                        ( 
                            <p className={`customFont text-black font-mono text-justify text-lg break-words`}>Finalizada</p>
                        ):(
                            <p className={`customFont h-44 text-black font-mono text-justify text-xs break-words`}>{toDo.task}</p>
                        )   
                        }
                    </div>
                    <div className='flex justify-between gap-2 mb-2'>
                        <button className='shine bg-green-600 hover:bg-green-300 rounded-full p-1 w-1/2' onClick={()=> markComplete(toDo.id)}><FaCheck className="text-white mx-auto" /></button>
                        <button className="shine bg-blue-600 hover:bg-blue-400 rounded-full p-1 w-1/2" onClick={handleEdit}> <FaEdit className="text-white mx-auto" /> </button>
                    </div>
                    <button className="shine bg-red-500 hover:bg-orange-400 rounded-full p-1" onClick={()=> deleteToDo(toDo.id)}><FaTrash className="text-white mx-auto" /></button>
        </li>
    )
}

export default ToDoItem;