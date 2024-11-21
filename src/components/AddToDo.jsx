import { useState } from "react";
import '../App.css'

function AddToDo({addToDo, showSnackBar}){

    const [input , setInput] = useState("");      
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(input !== ''){                
            addToDo(input.trim());      
        } else {
            showSnackBar('Por favor insira algo');     
        }
    }
    return (
        <section className="my-10">
        <form onSubmit={handleSubmit} className="flex justify-center items-center mt-5">
            <input placeholder='Digite sua tarefa...😃' className=" search-bar border border-black p-2 rounded-xl w-72"  type='text' value={input} onChange={(e)=> setInput(e.target.value)}></input> 
            <button className='add-btn bg-teal-800  text-white font-bold p-3 rounded-full ml-4' type='submit'>Adicionar</button>
        </form>
        </section>
    )
}

export default AddToDo;