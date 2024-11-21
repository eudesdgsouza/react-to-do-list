
import '../App.css'

function Header(){

    return (
        <header className="flex justify-between items-center border border-white-100 text-center py-5 bg-gray-800 text-white font-bold text-2xl"> 
            <i className="fas fa-tasks text-3xl cursor-pointer mx-3 "></i>
            <h1 className="header-title bg-gray p-1 rounded-md">TO-DO-LIST</h1>
            <div >
               <i className="hover:bg-amber-200 p-1 fas fa-user text-2xl mx-3 cursor-pointer" title="Login"></i> 
               <i className=" hover:bg-amber-200 p-1 fas fa-home text-2xl mx-3 cursor-pointer" title="Home"></i> 
               <i className="hover:bg-amber-200 p-1 fas fa-search text-2xl mx-3 cursor-pointer" title="Procurar"></i>
               <i className="hover:bg-amber-200 p-1 fas fa-cog text-2xl mx-3 cursor-pointer" title="Configurações"></i>            
            </div>
        </header>
    )
}

export default Header;