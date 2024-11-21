import '../App.css'


function SnackBar({message, close}){

    return(
        <div className="snackbar">
            <div className="flex justify-around items-center bg-gray-600 w-64 rounded-full mx-auto">
                <p className="text-white font-bold text-center">{message}</p>
                <button className="bg-orange-400 p-1 rounded-md text-white font-bold m-2" onClick={close}>Fechar</button>
            </div>

        </div>
    )
}

export default SnackBar;