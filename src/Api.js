import { async } from "@firebase/util";
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase/config';


//agregar
export const SavePersonName = (name) => {
    addDoc(collection(db,'react'),{name})
}
//lectura
export const  getPersons = async() =>{
    const result = await getDocs(query(collection(db, 'react')));
    return result;
}
//eliminar
export const deletePerson = async(id)  => {
    await deleteDoc(doc(db,'react',id));
}

//actualizar
export const updatePerson = async (id, name) =>{
    await updateDoc(doc(db, 'react', id), {name})
}