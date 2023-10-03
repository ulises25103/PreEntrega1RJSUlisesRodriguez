import { Link } from "react-router-dom"


function Error(){
    return(
        <div className="bg-blue-500 ">
        <div className=" flex flex-col items-center justify-center h-[100vh] w-[100%] text-2xl font-bold text-white">
            <h1 className="">Error</h1>
            <div className="cursor-pointer mt-10 transform transition-transform hover:scale-125 ">
            <Link to="/">Volver</Link>
            </div>
        </div>
        </div>
    )
}


export default Error