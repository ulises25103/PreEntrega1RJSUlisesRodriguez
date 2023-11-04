import { useState } from "react"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "../config/firebase"


function Auth(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const singIn = async()=>{
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle= async ()=>{
        await signInWithPopup(auth, googleProvider)

    }

    const logOut = async ()=>{
        await signOut(auth)
    }

    return(
        <div className="flex gap-3">
            <p>Usuario: {auth?.currentUser?.email}</p>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <div className="">
            <button className="bg-blue-500 agregar-btn hover:bg-blue-700 text-white px-2 flex gap-2" onClick={singIn}>Ingresar</button>
            <button className="bg-blue-500 agregar-btn hover:bg-blue-700 text-white px-2 flex" onClick={signInWithGoogle}>Ingresar con Google</button>
            <button className="bg-blue-500 agregar-btn hover:bg-blue-700 text-white px-2 flex" onClick={logOut}>LogOut</button>
            </div>
        </div>
    )
}

export default Auth