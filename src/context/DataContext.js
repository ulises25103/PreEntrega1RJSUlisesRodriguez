import { collection, getDocs } from "firebase/firestore";
import React, {createContext, useEffect, useState} from "react";
import { db } from "../config/firebase";


export const DataContext = createContext();


export const DataProvider = ({children})=>{

    const [itemList , setItemList ] = useState([])
    const itemsCollectionRef = collection(db,"dataProduct")

    const getItemList = async () => {
        const data = await getDocs(itemsCollectionRef)
        const filteredData = data.docs.map( (doc)=>({
            ...doc.data(),
            id:doc.id
        }) )
        
        setItemList(filteredData)
    
    }

    useEffect(() =>{

        getItemList()
    
    },[] )


    
    return(
        <DataContext.Provider value={[itemList ,setItemList]}> 
            {children}
        </DataContext.Provider>
    )
}