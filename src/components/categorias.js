import { Link } from "react-router-dom";
import { collection, getDocs, doc} from "firebase/firestore";
import { db } from "../config/firebase";
import { DataContext } from '../context/DataContext';
import React, { useContext, useEffect, useState } from 'react';



function Categorias(){
    return (
        <nav className="flex text-2xl font-bold gap-10" id="categorySelect">
            <Link className="cursor-pointer transform transition-transform hover:scale-105" to="/">Home</Link>
            <Link className="cursor-pointer transform transition-transform hover:scale-105" value="Mouses" to="/mouses"> Mouses</Link>
            <Link className="cursor-pointer transform transition-transform hover:scale-105" value="Teclados" to="/teclados">Teclados</Link>
        </nav>
    )
}

export default Categorias;